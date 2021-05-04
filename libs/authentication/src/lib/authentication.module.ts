import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
// import { NxModule } from '@nrwl/nx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added
import { MaterialModule } from '@botmind-app/material';

import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterComponent } from './containers/register/register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AuthGuard } from '@botmind-app/authentication';
import { AuthService } from '@botmind-app/service/auth';

export const authenticationRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    ToastrModule.forRoot(),
  ],
  providers: [AuthService],
  declarations: [LoginComponent, LoginFormComponent, RegisterComponent, RegisterFormComponent],
})
export class AuthenticationModule {}
