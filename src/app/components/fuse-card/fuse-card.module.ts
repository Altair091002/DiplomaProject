import {FuseCardComponent} from "./fuse-card.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    FuseCardComponent
  ],
  imports     : [
    CommonModule
  ],
  exports     : [
    FuseCardComponent
  ]
})
export class FuseCardModule
{
}
