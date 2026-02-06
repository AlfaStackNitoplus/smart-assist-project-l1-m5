import { Routes } from '@angular/router';
import { LiveChat } from '../user/live-chat/live-chat';
import { Supervisor } from './supervisor';


export const supervisorRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Supervisor },
  { path: 'live-chat', component: LiveChat },



];

