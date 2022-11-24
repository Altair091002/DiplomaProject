import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TopicService} from "../../services/topic.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PostPayload} from "../../models/PostPayload";

@Component({
  selector: 'app-dashboard-dialog',
  templateUrl: './dashboard-dialog.component.html',
  styleUrls: ['./dashboard-dialog.component.scss']
})
export class DashboardDialogComponent implements OnInit {

  topicForm !: FormGroup;
  actionBtn = 'Save';

  constructor(
    private formBuilder: FormBuilder,
    private api: TopicService,
    @Inject(MAT_DIALOG_DATA) public editData: PostPayload,
    private dialogRef: MatDialogRef<DashboardDialogComponent>
  ) { }

  ngOnInit(): void {
    this.topicForm = this.formBuilder.group ({
      title  : ['', Validators.required],
      content : ['', Validators.required],
      createdOn : ['', Validators.required],
      username : ['', Validators.required],
    });

    if (this.editData) {
      this.actionBtn = 'Update';
      this.topicForm.controls['title'].setValue(this.editData.title);
      this.topicForm.controls['content'].setValue(this.editData.content);
      this.topicForm.controls['createdOn'].setValue(this.editData.createdOn);
      this.topicForm.controls['username'].setValue(this.editData.username);
    }
  }
  addProduct(){
    if (!this.editData){
      if (this.topicForm.valid) {
        this.api.addPost(this.topicForm.value)
          .subscribe({
            next: (res) => {
              alert('topic added successfully!');
              this.topicForm.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              alert('Error while adding the topic');
            }
          });
      }
    }
    else{
      this.updateProduct();
    }
  }
  updateProduct() {
    // this.api.addPost(this.topicForm.value, this.editData.id)
    this.api.updatePost(this.topicForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert('Product updated Successfully');
          this.topicForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert('Error while updating the record!!');
        }
      });
  }
}
