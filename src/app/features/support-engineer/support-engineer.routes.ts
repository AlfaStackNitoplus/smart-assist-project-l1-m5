import { Routes } from '@angular/router';
import { SupportEngineer } from './support-engineer';
import { SupportEngineerTicket } from './support-engineer-ticket/support-engineer-ticket';
import { AiAssistant } from '../user/ai-assistant/ai-assistant';
import { LiveChat } from '../user/live-chat/live-chat';
import { TrackTicket } from '../user/track-ticket/track-ticket';


export const supportEngineerRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SupportEngineer },
  { path: 'support-ticket', component: SupportEngineerTicket },
  { path: 'track-ticket', component: TrackTicket },
  { path: 'track-ticket/:ticketId', component: TrackTicket },

  { path: 'live-chat', component: LiveChat },
  { path: 'ai-assistant', component: AiAssistant }



];

