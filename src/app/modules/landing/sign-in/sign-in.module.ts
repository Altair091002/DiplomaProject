import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {SignInComponent} from "./sign-in.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";

const signInRoutes: Route[] = [
  {
    path: '',
    component: SignInComponent
  }
];

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    RouterModule.forChild(signInRoutes),
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class SignInModule {
}
