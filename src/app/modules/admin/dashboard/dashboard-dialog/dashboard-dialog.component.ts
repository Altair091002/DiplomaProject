import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TopicService} from "../../services/topic.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dashboard-dialog',
  templateUrl: './dashboard-dialog.component.html',
  styleUrls: ['./dashboard-dialog.component.scss']
})
export class DashboardDialogComponent implements OnInit {

  productForm !: FormGroup;
  actionBtn = 'Save';

  constructor(
    private formBuilder: FormBuilder,
    private api: TopicService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DashboardDialogComponent>
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group ({
      title  : ['', Validators.required],
      name : ['', Validators.required],
      description : ['', Validators.required],
      dateCreated : ['', Validators.required],
      unitPrice : ['', Validators.required],
      unitsInStock : ['', Validators.required],
    });

    // if (this.editData) {
    //   this.actionBtn = 'Update';
    //   this.productForm.controls.title.setValue(this.editData.imageUrl);
    //   this.productForm.controls.name.setValue(this.editData.name);
    //   this.productForm.controls.description.setValue(this.editData.description);
    //   this.productForm.controls.dateCreated.setValue(this.editData.dateCreated);
    //   this.productForm.controls.unitPrice.setValue(this.editData.unitPrice);
    //   this.productForm.controls.unitsInStock.setValue(this.editData.unitsInStock);
    //
    // }
  }
  addProduct(){
    if (!this.editData){
      if (this.productForm.valid) {
        this.api.addPost(this.productForm.value)
          .subscribe({
            next: (res) => {
              alert('Product added successfully!');
              this.productForm.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              alert('Error while adding the product');
            }
          });
      }
    }
    else{
      this.updateProduct();
    }
  }
  updateProduct() {
    // this.api.addPost(this.productForm.value, this.editData.id)
    this.api.addPost(this.productForm.value)
      .subscribe({
        next: (res) => {
          alert('Product updated Successfully');
          this.productForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert('Error while updating the record!!');
        }
      });
  }

}
