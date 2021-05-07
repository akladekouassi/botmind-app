import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
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
import { BlogsModule } from '@botmind-app/blogs';
import { LayoutModule } from '@botmind-app/layout';
import { LayoutComponent } from './containers/layout/layout.component';
import { AuthService } from '@botmind-app/service/auth';
import { BlogsService } from '@botmind-app/service/blogs';
// import { NotAuthGuard } from "@botmind-app/authentication";
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent, RegisterComponent, NotAuthGuard, AuthGuard } from '@botmind-app/authentication';
import { BlogsComponent } from '@botmind-app/blogs';

@NgModule({
  declarations: [AppComponent, RegistrationFormComponent, ArticleCardComponent, LayoutComponent],
  imports: [
    BrowserModule,
    // CommonModule,
    MaterialModule,
    LayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule,
    BlogsModule,
    RouterModule,
    AppRoutingModule,
    // RouterModule.forRoot(
    //   [
    //     { path: '', pathMatch: 'full', redirectTo: 'auth' },
    //     { path: 'auth', children: authenticationRoutes, canActivate: [NotAuthGuard] },
    //     {
    //       path: 'blogs',
    //       loadChildren: () => import('@botmind-app/blogs').then(module => module.BlogsModule),
    //       // canActivate: [AuthGuard],
    //     },
    //     { path: '**', redirectTo: 'auth/login' },
    //   ],
    //   { initialNavigation: 'enabled' }
    // ),
    HttpClientModule,
    HttpModule,
    ToastrModule.forRoot(),
  ],
  exports: [MaterialModule],
  providers: [AuthGuard, AuthService, BlogsService, NotAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
