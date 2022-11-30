import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {userResponse} from "./interfaces/user-response";
import {Observable} from "rxjs";
import {SharedModule} from "../../shared/shared.module";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDetailsUrl = 'http://localhost:7777/api/client/info';
  private userUrl = 'http://localhost:7777/api/student/';

  constructor(private http: HttpClient) {
  }

  userDetails(): Observable<any>{
    return this.http.get<any>(this.userDetailsUrl);
  }

  changeStatus(){
    return this.http.put(this.userUrl + 2 + "/status/VIP", {});
  }
}
