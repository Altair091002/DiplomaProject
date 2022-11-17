import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtResponse} from "./interfaces/jwt-response";
import {SignUpInfo} from "./interfaces/signup-info";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signInUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  singIn(credentials: {username: string, password: string}) {
    return this.http.post<JwtResponse>(this.signInUrl, credentials, this.httpOptions);
  }

  signUp(info: SignUpInfo) {
    return this.http.post<string>(this.signupUrl, info, this.httpOptions);
  }
}
