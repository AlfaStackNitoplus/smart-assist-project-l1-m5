import { Component } from '@angular/core';
import { TicketTable } from '../ticket-table/ticket-table';

@Component({
  selector: 'app-my-ticket',
  imports: [TicketTable],
  templateUrl: './my-ticket.html',
  styleUrl: './my-ticket.scss',
})
export class MyTicket {

}