import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-user',
  imports: [MatToolbarModule,MatCardModule],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
userName: string = 'Learner';
}
