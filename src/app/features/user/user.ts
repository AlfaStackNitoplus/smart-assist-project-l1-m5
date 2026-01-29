import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { MockData } from '../../assets/mock-data';


@Component({
  selector: 'app-user',
  imports: [MatToolbarModule, MatCardModule],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  userName: string = '';
  userId: string = '';
  constructor(
    private route: ActivatedRoute
  ) {
    route.queryParams.subscribe(params => {
      this.userId = params['id'];
    });
    this.userName = MockData.users.find(u => u.userId === this.userId)?.name || '';
  }
}
