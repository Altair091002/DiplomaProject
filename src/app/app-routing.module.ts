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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
