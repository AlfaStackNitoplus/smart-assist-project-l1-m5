import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-technical-details-learnt',
  imports: [CommonModule,
    RouterModule,
    MatCardModule,
    MatDividerModule],
  templateUrl: './technical-details-learnt.html',
  styleUrl: './technical-details-learnt.scss',
})
export class TechnicalDetailsLearnt {

}
