import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './containers/auth/auth.component';
// import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { AuthModule, authRoutes } from '@botmind-app/auth';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: 'auth', children: authRoutes }], {
      initialNavigation: 'enabled',
    }),
    AuthModule,
  ], // added],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
