import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {HomeComponent} from "./home.component";
import {MatIconModule} from "@angular/material/icon";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import {CardModule} from "../../../components/card/card.module";

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatIconModule,
    MatStepperModule,
    MatButtonModule,
    CardModule,
  ]
})
export class HomeModule {
}
