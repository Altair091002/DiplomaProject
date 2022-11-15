import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {ContactsComponent} from "./contacts.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

const routes: Route[] = [
  {
    path: '',
    component: ContactsComponent
  }
];

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class ContactsModel {
}
