import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { MockData } from '../../assets/mock-data';
import { Ticket, TicketPriority, TicketStatus } from '../../core/models/ticket.model';
import { MatTab } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { InteractiveRow } from '../../shared/directive/interactive-row';
import { TicketStatusPipe } from '../../shared/pipes/ticket-status-pipe';


@Component({
  selector: 'app-user',
  imports: [MatToolbarModule, MatCardModule,MatTableModule,CommonModule,InteractiveRow,TicketStatusPipe],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  userName: string = '';
  userId: string = '';
  userTickets: Ticket[]= [];
  ticketPriority =TicketPriority;
  ticketStatus =TicketStatus;
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
     this.userTickets = MockData.tickets.filter(
      t => t.createdByUserId === this.userId
    );
  }
  getAssigneeName(assigneeId?: string): string {
    if (!assigneeId) return '-';
    return MockData.users.find(u => u.userId === assigneeId)?.name ?? '-';
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
