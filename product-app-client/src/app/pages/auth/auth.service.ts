import { Injectable } from '@angular/core';
import { User } from 'src/app/models/auth.model';

@Injectable({providedIn: 'root'})

export class AuthService {

  private mAuthenticaded = false;

  get authenticaded() {
    return this.mAuthenticaded;
  }

  login(user: User) {
    if (user.username === 'root' && user.password === 'admin') {
      this.mAuthenticaded = true;
    }
  }

  logout() {
    this.mAuthenticaded = false;
  }
}
