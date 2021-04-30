import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { AuthComponent } from '../../../../apps/frontend/src/app/containers/auth/auth.component';
import { RegistrationFormComponent } from '../../../../apps/frontend/src/app/components/registration-form/registration-form.component';

export const authRoutes: Route[] = [
  { path: 'register', component: AuthComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AuthComponent, RegistrationFormComponent],
})
export class AuthModule {}
