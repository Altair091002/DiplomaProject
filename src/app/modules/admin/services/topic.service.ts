import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {PostPayload} from "../models/PostPayload";

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  token = sessionStorage.getItem("AuthToken");
  private httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };
  // private baseUrl = 'http://localhost:7070/api/topics';
  constructor(private httpClient: HttpClient) { }


  addPost(postPayload: PostPayload){
    return this.httpClient.post('http://localhost:8080/api/posts/', postPayload);
  }

  getAllPosts(): Observable<Array<PostPayload>>{
    return this.httpClient.get<Array<PostPayload>>("http://localhost:8080/api/posts/all",  this.httpOptions);
  }

  getPost(permaLink: Number):Observable<PostPayload>{
    return this.httpClient.get<PostPayload>('http://localhost:8080/api/posts/get/' + permaLink);
  }
}
