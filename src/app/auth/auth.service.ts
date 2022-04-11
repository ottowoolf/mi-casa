import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = true;
  private user = 'user1';

  constructor() {}

  get userId() {
    return this.user;
  }

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
