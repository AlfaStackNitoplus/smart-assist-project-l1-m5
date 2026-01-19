import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private mockUsers = [
    {
      email: 'admin@smartassist.com',
      password: 'admin123',
      role: 'ADMIN'
    },
    {
      email: 'support@smartassist.com',
      password: 'support123',
      role: 'SUPPORT_ENGINEER'
    },
    {
      email: 'user@smartassist.com',
      password: 'user123',
      role: 'USER'
    }
  ];

  login(email: string, password: string) {
    const user = this.mockUsers.find(
      u => u.email === email && u.password === password
    );

    if (!user) {
      return null; // invalid login
    }

    return {
      email: user.email,
      role: user.role
    };
  }

}
