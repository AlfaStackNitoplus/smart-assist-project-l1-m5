import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-support-engineer',
  imports: [MatToolbarModule,
    MatCardModule,
    MatButtonModule,CommonModule],
  templateUrl: './support-engineer.html',
  styleUrl: './support-engineer.scss',
})
export class SupportEngineer {
 isDarkMode = false;
  isHighlight = true;

  openTickets = 12;
  resolvedToday = 5;
  pendingFollowUps = 3;
}
