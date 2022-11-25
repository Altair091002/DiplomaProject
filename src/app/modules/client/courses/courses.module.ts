import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {CoursesComponent} from "./courses.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {AsyncPipe,CommonModule, NgForOf, NgIf, NgStyle} from "@angular/common";
import {FuseCardModule} from "../../../components/fuse-card";
import {NgxDocViewerModule} from "ngx-doc-viewer";

const routes: Route[] = [
  {
    path: '',
    component: CoursesComponent,
    children : [
      {
        path     : '',
        pathMatch: 'full',
        component: ListComponent,
      },
      {
        path     : ':id',
        component: DetailsComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [
    CoursesComponent,
    DetailsComponent,
    ListComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    MatButtonToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    CommonModule,
    NgForOf,
    AsyncPipe,
    FuseCardModule,
    NgStyle,
    NgIf,
    NgxDocViewerModule
  ]
})
export class CoursesModule {
}
