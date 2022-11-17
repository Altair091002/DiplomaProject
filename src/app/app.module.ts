import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {CoreModule} from "./core/core.module";
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,

        CoreModule,

        LayoutModule,
    ],
    providers: [],
  exports: [
  ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
