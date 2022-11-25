import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {PostPayload} from "../../../admin/models/PostPayload";
import {TopicService} from "../../../admin/services/topic.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  posts !: Array<PostPayload>;
  completed = false;

  constructor(private postService: TopicService) { }

  ngOnInit(): void {
     this.postService.getAllPosts().subscribe({
       next: (res) => {
         console.log(res)
         this.posts = res
       },
       error: () => {
         alert('Error while download the posts!!');
       }
     });
  }

  hideCompleted() {
    this.completed = !this.completed;
  }
}
