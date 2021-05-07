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
import { AuthenticationModule } from '@botmind-app/authentication';
import { BlogsModule } from '@botmind-app/blogs';
import { LayoutComponent } from './containers/layout/layout.component';
import { AuthService } from '@botmind-app/service/auth';
import { BlogsService } from '@botmind-app/service/blogs';
import { AppRoutingModule } from './app-routing.module';
import { NotAuthGuard, AuthGuard } from '@botmind-app/authentication';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    // CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule,
    BlogsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    ToastrModule.forRoot(),
  ],
  exports: [MaterialModule],
  providers: [AuthGuard, AuthService, BlogsService, NotAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
