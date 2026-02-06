import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageKeys } from '../models/constant/local-session-enum';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class PersistentAuthService {
  constructor(private router: Router) {
  }

  get userDetails(): User | null {
    const storedData = localStorage.getItem(LocalStorageKeys.LOCAL_USER_DATA);
    if (storedData) {
      return JSON.parse(storedData) as User;
    }
    return null;
  }


  set userDetails(response: User | null) {
    if (response) {
      localStorage.setItem(LocalStorageKeys.LOCAL_USER_DATA, JSON.stringify(response));
    } else {
      localStorage.removeItem(LocalStorageKeys.LOCAL_USER_DATA);
    }
  }
  clear(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
