import { NgModule } from '@angular/core';
import {LayoutComponent} from "./layout.component";
import {VerticalLayoutModule} from "./layouts/vertical-layout/vertical-layout.module";

const layoutModules = [
  VerticalLayoutModule
];

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports     : [
    ...layoutModules,
  ],
  exports     : [
    LayoutComponent,
    ...layoutModules
  ]
})
export class LayoutModule {}
