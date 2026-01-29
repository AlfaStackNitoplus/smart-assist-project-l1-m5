import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-manual',
  imports: [CommonModule,
    RouterModule,
    MatCardModule,
    MatDividerModule],
  templateUrl: './user-manual.html',
  styleUrl: './user-manual.scss',
})
export class UserManual {

}
