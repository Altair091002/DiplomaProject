import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule, DatePipe} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {ViewCategoriesComponent} from "./view-categories.component";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import { AddCategoryComponent } from './add-category/add-category.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";

const routes: Route[] = [
  {
    path: '',
    component: ViewCategoriesComponent
  },
  {
    path: 'add-category',
    component: AddCategoryComponent
  },
];

@NgModule({
  declarations: [
    ViewCategoriesComponent,
    AddCategoryComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    DatePipe,
    MatButtonModule,
    MatDialogModule,
    DragDropModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatSnackBarModule
    // MatDialog
  ]
})
export class ViewCategoriesModule {
}
