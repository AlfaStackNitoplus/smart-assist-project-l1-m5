import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { MockData } from '../../assets/mock-data';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private ticketsSubject = new BehaviorSubject<Ticket[]>(MockData.tickets);
  tickets$ = this.ticketsSubject.asObservable();

  /** Get tickets created by a specific user */
  getTicketsByUser(userId: string): Observable<Ticket[]> {
    return this.tickets$.pipe(
      map(tickets =>
        tickets.filter(t => t.createdByUserId === userId)
      )
    );
  }
}
