import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {VerticalLayoutComponent} from "./vertical-layout.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    VerticalLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    VerticalLayoutComponent
  ]
})
export class VerticalLayoutModule {
}
