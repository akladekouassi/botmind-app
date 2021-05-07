import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added
import { MaterialModule } from '@botmind-app/material';

import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterComponent } from './containers/register/register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AuthService, AuthInterceptor } from '@botmind-app/service/auth';

@NgModule({
  imports: [CommonModule, MaterialModule, BrowserAnimationsModule, ReactiveFormsModule],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  declarations: [LoginComponent, LoginFormComponent, RegisterComponent, RegisterFormComponent],
})
export class AuthenticationModule {}
