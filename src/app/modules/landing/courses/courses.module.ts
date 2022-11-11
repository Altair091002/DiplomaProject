import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {CoursesComponent} from "./courses.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";

const routes: Route[] = [
  {
    path: '',
    component: CoursesComponent
  }
];

@NgModule({
  declarations: [
    CoursesComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    MatButtonToggleModule,
    MatButtonModule
  ]
})
export class CoursesModule {
}
