import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added
import { MaterialModule } from '@botmind-app/material';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { AuthenticationModule, authenticationRoutes } from '@botmind-app/authentication';
import { LayoutModule } from '@botmind-app/layout';
import { LayoutComponent } from './containers/layout/layout.component';
import { AuthGuard } from '@botmind-app/authentication';
import { AuthService } from '@botmind-app/service/auth';

@NgModule({
  declarations: [AppComponent, RegistrationFormComponent, ArticleCardComponent, LayoutComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    LayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: 'auth/login' },
        { path: 'auth', children: authenticationRoutes },
        {
          path: 'blogs',
          loadChildren: () => import('@botmind-app/blogs').then(module => module.BlogsModule),
          canActivate: [AuthGuard],
        },
        { path: '**', redirectTo: 'auth/login' },
      ],
      { initialNavigation: 'enabled' }
    ),
    HttpClientModule,
    HttpModule,
    ToastrModule.forRoot(),
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
