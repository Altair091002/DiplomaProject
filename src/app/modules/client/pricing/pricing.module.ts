import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {PricingComponent} from "./pricing.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

const routes: Route[] = [
  {
    path: '',
    component: PricingComponent
  }
];

@NgModule({
  declarations: [
    PricingComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule
  ]
})
export class PricingModule {
}
