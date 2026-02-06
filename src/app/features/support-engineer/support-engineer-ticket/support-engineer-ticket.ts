import { Component } from '@angular/core';
import { Ticket, TicketPriority, TicketStatus } from '../../../core/models/ticket.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PersistentAuthService } from '../../../core/services/persistent-auth';
import { MockData } from '../../../assets/mock-data';
import { AgePipePipe } from '../../../shared/pipes/age-pipe-pipe';

@Component({
  selector: 'app-support-engineer-ticket',
  imports: [CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    AgePipePipe,
    MatTooltipModule],
  templateUrl: './support-engineer-ticket.html',
  styleUrl: './support-engineer-ticket.scss',
})
export class SupportEngineerTicket {
  statusEnum = TicketStatus;
  displayedColumns: string[] = ['createdBy', 'description', 'priority', 'status', 'age', 'action'];

  ticketPriority = TicketPriority;

  tickets: Ticket[] = [];
  constructor(private persistentAuthService: PersistentAuthService) {
    this.tickets = MockData.tickets.filter(
      t => t.assignedToUserId === this.persistentAuthService.userDetails?.userId
    );

  }



}