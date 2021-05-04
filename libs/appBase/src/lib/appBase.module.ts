import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { AuthComponent } from '../../../../apps/frontend/src/app/containers/auth/auth.component';
import { LoginFormComponent } from '../../../../apps/frontend/src/app/components/login-form/login-form.component';

const AppRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  { path: 'register', component: AuthComponent },
  { path: 'login', component: LoginFormComponent },
  // { path: 'home', component: HomePageComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
})
export class AppBaseRoutingModule {}
