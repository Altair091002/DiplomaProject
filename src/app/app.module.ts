import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {CoreModule} from "./core/core.module";
import {NgxUiLoaderHttpModule, NgxUiLoaderModule} from "ngx-ui-loader";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule,
        LayoutModule,
        NgxUiLoaderModule,
        NgxUiLoaderHttpModule.forRoot({
          showForeground: true
        })
    ],
    providers: [],
  exports: [
  ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
