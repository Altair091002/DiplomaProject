import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'home', loadChildren: () => import('src/app/modules/client/home/home.module').then(m => m.HomeModule)},
      {path: 'sign-in', loadChildren: () => import('src/app/modules/auth/sign-in/sign-in.module').then(m => m.SignInModule)},
      {path: 'sign-up', loadChildren: () => import('src/app/modules/auth/sign-up/sign-up.module').then(m => m.SignUpModule)},
      {path: 'courses', loadChildren: () => import('src/app/modules/client/courses/courses.module').then(m => m.CoursesModule)},
      {path: 'about-us', loadChildren: () => import('src/app/modules/client/about-us/about-us.module').then(m => m.AboutUsModule)},
      {path: 'contacts', loadChildren: () => import('src/app/modules/client/contacts/contacts.model').then(m => m.ContactsModel)},
      {path: 'settings', loadChildren: () => import('src/app/modules/client/settings/settings.module').then(m => m.SettingsModule)},
      {path: 'dashboard', loadChildren: () => import('src/app/modules/admin/dashboard/dashboard.module').then(m => m.DashboardModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
