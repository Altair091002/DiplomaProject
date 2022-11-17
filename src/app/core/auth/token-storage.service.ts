import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME = 'Username';
const EMAIL = 'Email';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveEmail(email: string) {
    window.sessionStorage.removeItem(EMAIL);
    window.sessionStorage.setItem(EMAIL, email);
  }

  public getEmail() {
    return sessionStorage.getItem(EMAIL);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME);
    window.sessionStorage.setItem(USERNAME, username);
  }

  public getUsername() {
    return sessionStorage.getItem(USERNAME);
  }
}
