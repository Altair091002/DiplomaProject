import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {CoursesComponent} from "./courses.component";

const routes: Route[] = [
  {
    path: '',
    component: CoursesComponent
  }
];

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CoursesModule {
}
