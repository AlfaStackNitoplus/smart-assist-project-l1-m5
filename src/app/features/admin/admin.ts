import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-admin',
  imports: [ MatToolbarModule,
    MatCardModule,
    MatButtonModule],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {

}
