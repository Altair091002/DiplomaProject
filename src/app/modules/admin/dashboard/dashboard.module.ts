import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule {
}
