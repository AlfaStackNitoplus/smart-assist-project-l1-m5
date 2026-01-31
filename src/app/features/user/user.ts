import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';

import { Ticket, TicketPriority, TicketStatus } from '../../core/models/ticket.model';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

import { InteractiveRow } from '../../shared/directive/interactive-row';
import { TicketStatusPipe } from '../../shared/pipes/ticket-status-pipe';
import { TicketService } from '../../core/services/ticket.service';
import { MockData } from '../../assets/mock-data';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    CommonModule,
    InteractiveRow,
    TicketStatusPipe
  ],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User implements OnInit, OnDestroy {

  userId!: string;
  userName = '';

  userTickets$!: Observable<Ticket[]>;   // ✅ Observable
  ticketPriority = TicketPriority;
  ticketStatus = TicketStatus;

  displayedColumns: string[] = [
    'ticketId',
    'description',
    'priority',
    'status',
    'createdAt',
    'age',
    'assignee'
  ];

  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        this.userId = params['id'];
        this.userTickets$ = this.ticketService.getTicketsByUser(this.userId);
      });
  }
    getAssigneeName(assigneeId?: string): string {
    if (!assigneeId) return '-';
    return MockData.users.find(u => u.userId === assigneeId)?.name ?? '-';
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
 
}
