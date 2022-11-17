import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PostPayload} from "../models/PostPayload";
import {TopicService} from "../services/topic.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  addPostForm!: FormGroup;
  postPayload!: PostPayload;
  title = new FormControl('');
  body = new FormControl('');

  constructor(private addpostService: TopicService, private router: Router) {
    this.addPostForm = new FormGroup({
      title: this.title,
      body: this.body
    });
    this.postPayload = {
      id: '',
      content: '',
      title: '',
      username: ''
    }
  }

  ngOnInit(): void {
  }
  addPost() {
    // @ts-ignore
    this.postPayload.content = this.addPostForm.get('body').value;
    // @ts-ignore
    this.postPayload.title = this.addPostForm.get('title').value;
    this.addpostService.addPost(this.postPayload).subscribe(data => {
      this.router.navigateByUrl('/');
    }, error => {
      console.log('Failure Response');
    })
  }

}
