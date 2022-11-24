import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {PostPayload} from "../../../admin/models/PostPayload";
import {TopicService} from "../../../admin/services/topic.service";
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  post!: PostPayload;

  constructor(private postService: TopicService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.postService.getPost(this.route.snapshot.paramMap.get('id')).subscribe({
      next: (res) => {
        this.post = res
      },
      error: () => {
        alert('Error while download the post!!');
      }
    });
    console.log(this.post)
  }

}
