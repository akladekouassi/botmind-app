import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added
import { MaterialModule } from '@botmind-app/material';
import { BlogsComponent } from './containers/blogs/blogs.component';
import { BlogComponent } from './components/blog/blog.component';
import { AuthGuard } from '@botmind-app/authentication';
import { AuthService, AuthInterceptor } from '@botmind-app/service/auth';
import { BlogsService } from '@botmind-app/service/blogs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { AddBlogComponent } from './containers/add-blog/add-blog.component';
import { EditBlogFormComponent } from './components/edit-blog-form/edit-blog-form.component';
import { EditBlogComponent } from './containers/edit-blog/edit-blog.component';
import { AddBlogFormComponent } from './components/add-blog-form/add-blog-form.component';
import { CurrentUserBlogsComponent } from './containers/current-user-blogs/current-user-blogs.component';
import { ProfileComponent } from './containers/profile/profile.component';

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    // HttpClientModule,
    // HttpModule,
    ToastrModule.forRoot(),
    RouterModule,
    // RouterModule.forChild([{ path: '', component: BlogsComponent }]),
    ReactiveFormsModule,
  ],
  declarations: [
    BlogsComponent,
    BlogComponent,

    AddBlogComponent,
    AddBlogFormComponent,
    EditBlogFormComponent,
    EditBlogComponent,
    CurrentUserBlogsComponent,
    ProfileComponent,
  ],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    ,
    BlogsService,
  ],
})
export class BlogsModule {}
