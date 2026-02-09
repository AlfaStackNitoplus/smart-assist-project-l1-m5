import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, Subject, combineLatest, map, of, BehaviorSubject } from 'rxjs';
import { MockData } from '../../../assets/mock-data';
import { Ticket, TicketPriority, TicketStatus } from '../../../core/models/ticket.model';
import { PersistentAuthService } from '../../../core/services/persistent-auth';
import { TicketService } from '../../../core/services/ticket.service';
import { FeedbackDialog } from '../feedback-dialog/feedback-dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';
import { InteractiveRow } from '../../../shared/directive/interactive-row';
import { AgePipePipe } from '../../../shared/pipes/age-pipe-pipe';
import { TicketStatusPipe } from '../../../shared/pipes/ticket-status-pipe';

@Component({
  selector: 'app-ticket-table',
  imports: [MatToolbarModule,
    MatCardModule,
    MatTableModule,
    CommonModule,
    InteractiveRow,
    TicketStatusPipe,
    CommonModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    AgePipePipe,
    MatTooltip],
  templateUrl: './ticket-table.html',
  styleUrl: './ticket-table.scss',
})
export class TicketTable implements OnInit, OnDestroy {

  userId!: string;
  userTickets$!: Observable<Ticket[]>;   // ✅ Observable
  selectedFilter = 'ALL';
  filteredTickets$!: Observable<Ticket[]>;

  ticketPriority = TicketPriority;
  ticketStatus = TicketStatus;

  displayedColumns: string[] = [
    'description',
    'priority',
    'status',
    'age',
    'assignee',
    'action'
  ];
  stars = [1, 2, 3, 4, 5];

  private destroy$ = new Subject<void>();

  constructor(
    private ticketService: TicketService,
    private dialog: MatDialog,
    private persistentAuthService: PersistentAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userId = this.persistentAuthService.userDetails?.userId || '';
    this.userTickets$ = this.ticketService.getTicketsByUser(this.userId);
    this.filteredTickets$ = combineLatest([
      this.userTickets$,
      this.filterSubject
    ]).pipe(
      map(([tickets, selectedStatuses]) => {
        // If nothing is selected, show everything
        if (!selectedStatuses || selectedStatuses.length === 0) {
          return tickets;
        }

        // Filter tickets where the string status is in our selected array
        return tickets.filter(ticket => {
          const statusString = TicketStatus[ticket.status]; 
          return selectedStatuses.includes(statusString);
        });
      })
    );
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getPriorityClass(priority: TicketPriority) {
    return {
      'priority-low': priority === TicketPriority.Low,
      'priority-medium': priority === TicketPriority.Medium,
      'priority-high': priority === TicketPriority.High
    };
  }

  getPriorityStyle(priority: TicketPriority) {
    return {
      'font-weight': priority === TicketPriority.High ? '600' : '400'
    };
  }
  viewTicketDetails(ticket: Ticket): void {
    const dialogRef = this.dialog.open(FeedbackDialog, {
      width: '350px',
      disableClose: true,
      data: ticket
    });
    dialogRef.afterClosed().subscribe((updated: Ticket | undefined) => {
      if (!updated) return;
      ticket.rating = updated.rating;
      ticket.feedback = updated.feedback;
      this.updateTicket(ticket);
    });

  }
  updateTicket(updated: Ticket) {
    // Update the ticket in MockData for demonstration purposes
    const ticketIndex = MockData.tickets.findIndex(t => t.ticketId === updated.ticketId);
    if (ticketIndex !== -1) {
      MockData.tickets[ticketIndex] = updated;
    }
    this.userTickets$ = of(MockData.tickets.filter(t => t.createdByUserId === this.userId));
    this.filteredTickets$ = this.userTickets$;
  }

 
  private filterSubject = new BehaviorSubject<string[]>([]);

  onFilterChange(selectedStatuses: string[]) {
    this.filterSubject.next(selectedStatuses);
  }


  getFeedbackPendingCount(tickets: Ticket[]): number {
    return tickets.filter(t => t.status === TicketStatus.Resolved && !t.rating).length;
  }

  onTicketSelcted(ticketId: number) {
    // Navigate to update the URL when a user selects from dropdown
    this.router.navigate(['user/track-ticket', ticketId]);
  }
  getByUserName(userId: string): string {
    const user = MockData.users.find(u => u.userId === userId);
    return user ? user.name : '';
  }
}

