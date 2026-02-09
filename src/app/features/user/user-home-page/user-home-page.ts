import { Component, OnDestroy, OnInit } from '@angular/core';
import { PersistentAuthService } from '../../../core/services/persistent-auth';
import { TicketTable } from '../ticket-table/ticket-table';

@Component({
  selector: 'app-user-home-page',
  imports: [TicketTable],
  templateUrl: './user-home-page.html',
  styleUrl: './user-home-page.scss',
})
export class UserHomePage {
constructor(public persistentAuthService: PersistentAuthService) { }


}