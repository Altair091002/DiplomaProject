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
  posts !: Observable<Array<PostPayload>>;

  constructor(private postService: TopicService) { }

  ngOnInit(): void {
    this.posts = this.postService.getAllPosts();
    console.log("Posts:", this.posts);
  }

}
