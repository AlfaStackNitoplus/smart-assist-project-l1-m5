import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute } from '@angular/router';
import { MockData } from '../../assets/mock-data';
import { MatTableModule } from '@angular/material/table';
import { InteractiveRow } from '../../shared/directive/interactive-row';
import { TicketStatusPipe } from '../../shared/pipes/ticket-status-pipe';
import { Ticket, TicketPriority, TicketStatus } from '../../core/models/ticket.model';

@Component({
  selector: 'app-support-engineer',
  imports: [MatToolbarModule, MatCardModule, MatTableModule, CommonModule, InteractiveRow, TicketStatusPipe],
  templateUrl: './support-engineer.html',
  styleUrl: './support-engineer.scss',
})
export class SupportEngineer {
  userName: string = '';
  userId: string = '';
  userTickets: Ticket[] = [];
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
  constructor(
    private route: ActivatedRoute
  ) {
    route.queryParams.subscribe(params => {
      this.userId = params['id'];
    });
    this.userName = MockData.users.find(u => u.userId === this.userId)?.name || '';
    // this.userTickets = MockData.tickets.filter(
    //   t => t.createdByUserId === this.userId
    // );
  }
  getAssigneeName(assigneeId?: string): string {
    if (!assigneeId) return '-';
    return MockData.users.find(u => u.userId === assigneeId)?.name ?? '-';
  }
}
