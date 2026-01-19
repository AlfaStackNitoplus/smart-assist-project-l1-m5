import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-login',
  imports: [FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  @Input() title: string = 'Login';
  @Output() loginSubmit = new EventEmitter<any>();

  username = '';
  password = '';

  onLogin() {
    this.loginSubmit.emit({
      username: this.username,
      password: this.password
    });
  }

}
