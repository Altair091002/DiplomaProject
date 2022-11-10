import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {SignUpComponent} from "./sign-up.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Route[] = [
  {
    path: '',
    component: SignUpComponent
  }
];

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ]
})
export class SignUpModule {
}
