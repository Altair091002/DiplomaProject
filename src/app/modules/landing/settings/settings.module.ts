import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {SettingsComponent} from "./settings.component";

const routes: Route[] = [
  {
    path: '',
    component: SettingsComponent
  }
];

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class SettingsModule {
}
