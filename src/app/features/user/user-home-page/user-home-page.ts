import { Component, OnDestroy, OnInit } from '@angular/core';
import { MyTicket } from '../my-ticket/my-ticket';
import { PersistentAuthService } from '../../../core/services/persistent-auth';

@Component({
  selector: 'app-user-home-page',
  imports: [MyTicket],
  templateUrl: './user-home-page.html',
  styleUrl: './user-home-page.scss',
})
export class UserHomePage {
constructor(public persistentAuthService: PersistentAuthService) { }


}