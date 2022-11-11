import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'home', loadChildren: () => import('src/app/modules/landing/home/home.module').then(m => m.HomeModule)},
      {path: 'sign-in', loadChildren: () => import('src/app/modules/landing/sign-in/sign-in.module').then(m => m.SignInModule)},
      {path: 'sign-up', loadChildren: () => import('src/app/modules/landing/sign-up/sign-up.module').then(m => m.SignUpModule)},
      {path: 'courses', loadChildren: () => import('src/app/modules/landing/courses/courses.module').then(m => m.CoursesModule)},
      {path: 'about-us', loadChildren: () => import('src/app/modules/landing/about-us/about-us.module').then(m => m.AboutUsModule)},
      {path: 'contacts', loadChildren: () => import('src/app/modules/landing/contacts/contacts.model').then(m => m.ContactsModel)},
      {path: 'settings', loadChildren: () => import('src/app/modules/landing/settings/settings.module').then(m => m.SettingsModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
