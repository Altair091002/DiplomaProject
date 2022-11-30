import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {CommonModule} from "@angular/common";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ExamComponent} from "./exam.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import * as path from "path";
import { LoadQuizComponent } from './load-quiz/load-quiz.component';
import {NormalGuard} from "../../services/normal.guard";
import { InstructionsComponent } from './instructions/instructions.component';
import { StartComponent } from './start/start.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

const routes: Routes = [
  {path: '', redirectTo: '0', pathMatch: 'full'},
  {
    path: '',
    component: ExamComponent,
    children:[
      {
        path: ':catId',
        component: LoadQuizComponent
      },
      {
        path: 'instructions/:qid',
        component: InstructionsComponent,
      },
    ]
  },
  {
    path: 'start/:qid',
    component: StartComponent
  },
  // {
  //   path: 'user-dashboard',
  //   component: Loa,
  // }
];

@NgModule({
  declarations: [
    ExamComponent,
    SidebarComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    FormsModule
  ]
})
export class ExamModule {
}
