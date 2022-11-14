import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {AboutUsComponent} from "./about-us.component";

const routes: Route[] = [
  {
    path: '',
    component: AboutUsComponent
  }
];

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AboutUsModule {
}
