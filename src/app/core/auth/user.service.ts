import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {userResponse} from "./user-response";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDetailsUrl = 'http://localhost:8080/api/client/info';
  token = sessionStorage.getItem("AuthToken");
  private httpOptions = {
    headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.token })
  };

  constructor(private http: HttpClient) { }

  userDetails(){
    return this.http.get<userResponse>(this.userDetailsUrl).subscribe(
      res => {
        console.log(res);
      }
    )
  }
}
