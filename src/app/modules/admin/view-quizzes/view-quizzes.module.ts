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
import {MatListModule} from "@angular/material/list";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ViewQuizzesComponent} from "./view-quizzes.component";
import {MatCardModule} from '@angular/material/card';
import { AddQuizzesComponent } from './add-quizzes/add-quizzes.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ViewQuizQuestionComponent } from './view-quiz-question/view-quiz-question.component';
import { UpdateQuizComponent } from './update-quiz/update-quiz.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSelectModule} from "@angular/material/select";
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";


const routes: Route[] = [
  {
    path: '',
    component: ViewQuizzesComponent
  },
  {
    path: 'add-quiz',
    component: AddQuizzesComponent
  },
  {
    path: 'quiz-question/:qId/:qTitle',
    component: ViewQuizQuestionComponent
  },
  {
    path: 'update-quiz/:qId',
    component: UpdateQuizComponent
  },
  {
    path: 'add-question/:qId/:qTitle',
    component: AddQuestionComponent
  },
];

@NgModule({
  declarations: [
    ViewQuizzesComponent,
    AddQuizzesComponent,
    AddQuestionComponent,
    ViewQuizQuestionComponent,
    UpdateQuizComponent
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
    MatSnackBarModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    // MatDialog
  ]
})
export class ViewQuizzesModule {
}
