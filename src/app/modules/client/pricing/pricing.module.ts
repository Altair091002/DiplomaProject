import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {PricingComponent} from "./pricing.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FuseCardModule} from "../../../components/fuse-card";
import {NgStyle} from "@angular/common";

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
    MatIconModule,
    FuseCardModule,
    NgStyle
  ]
})
export class PricingModule {
}
