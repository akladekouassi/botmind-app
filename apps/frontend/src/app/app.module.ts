import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added
import { MaterialModule } from '@botmind-app/material';
import { AppComponent } from './app.component';
import { AuthComponent } from './containers/auth/auth.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { AppBaseRoutingModule } from '@botmind-app/appBase';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, RegistrationFormComponent, AuthComponent, LoginFormComponent, HomePageComponent, ArticleCardComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppBaseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
