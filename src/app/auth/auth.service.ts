import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  constructor() {}

  get isUserAuthenticated() {
    return this.isAuthenticated;
  }

  onLogin() {
    this.isAuthenticated = true;
  }
  onLogout() {
    this.isAuthenticated = false;
  }
}
