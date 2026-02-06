import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PersistentAuthService } from '../../services/persistent-auth';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Input() version: string = '';
  @Input() isLogin: boolean = false;
  @Output() menuToggle = new EventEmitter<void>();

  constructor(private persistentAuthService: PersistentAuthService) { }

  toggleMenu() {
    this.menuToggle.emit();
  }

  logout() {
    this.persistentAuthService.clear();
    // Logic to handle user logout
    console.log('Logout button clicked!');
  }
}
