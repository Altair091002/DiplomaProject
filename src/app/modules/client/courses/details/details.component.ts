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

  post !: Observable<PostPayload>;

  constructor(private postService: TopicService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.post = this.postService.getPost(this.route.snapshot.paramMap.get('id'));
    console.log(this.post)
  }

}
