import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {userResponse} from "./interfaces/user-response";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDetailsUrl = 'http://localhost:8080/api/client/info';

  constructor(private http: HttpClient) { }

  userDetails(): Observable<any>{
    return this.http.get<any>(this.userDetailsUrl);
  }
}
