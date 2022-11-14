import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  person: any;

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public savePerson(person: string) {
    this.person = person;
  }

  public getPerson() {
    return this.person;
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
  }
}
interface Person {
  username: string;
  email: string;
  id: number;
  password: string;
}
