import { Injectable, signal, computed, effect } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageKeys } from '../models/constant/local-session-enum';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class PersistentAuthService {

  // ✅ MANDATORY signal<User>
  private _user = signal<User | null>(null);

  // expose readonly
  user = this._user.asReadonly();

  // optional helpers
  isLoggedIn = computed(() => !!this._user());
  role = computed(() => this._user()?.role);

  constructor(private router: Router) {

    // 🔹 Load from localStorage on app start
    const stored = localStorage.getItem(LocalStorageKeys.LOCAL_USER_DATA);
    if (stored) {
      this._user.set(JSON.parse(stored));
    }

    // ✅ REQUIRED effect() → log role change
    effect(() => {
      const current = this._user();
      if (current) {
        console.log('User role:', current.role);
      }
    });
  }

  // ✅ set user (Signal + storage sync)
  setUser(user: User | null) {
    this._user.set(user);

    if (user) {
      localStorage.setItem(
        LocalStorageKeys.LOCAL_USER_DATA,
        JSON.stringify(user)
      );
    } else {
      localStorage.removeItem(LocalStorageKeys.LOCAL_USER_DATA);
    }
  }

  // optional getter for legacy compatibility
  get userDetails(): User | null {
    return this._user();
  }

  clear(): void {
    this.setUser(null);
    this.router.navigate(['/login']);
  }
}
