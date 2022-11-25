import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {PostPayload} from "../../../admin/models/PostPayload";
import {TopicService} from "../../../admin/services/topic.service";
import {ActivatedRoute, Route} from "@angular/router";
import {FileUploadService} from "./file-upload.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file !: File; // Variable to store file

  post!: PostPayload;

  constructor(private postService: TopicService,
              private route: ActivatedRoute,
              private fileUploadService: FileUploadService) { }

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
  onChange(event:any) {
    this.file = event.target.files[0];
  }
  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
      (event: any) => {
        // if (typeof (event) === 'object') {

          // Short link via api response
          this.shortLink = event.link;
          console.log(this.shortLink);
          this.loading = false; // Flag variable
        // }
      }
    );
  }

}
