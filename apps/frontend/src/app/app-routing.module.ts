import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent, RegisterComponent, NotAuthGuard, AuthGuard } from '@botmind-app/authentication';
import { BlogsComponent } from '@botmind-app/blogs';
import {
  AddBlogFormComponent,
  CurrentUserBlogsComponent,
  EditBlogComponent,
  ProfileComponent,
} from '@botmind-app/blogs';

// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
    canActivate: [NotAuthGuard],
  },
  {
    path: 'auth/login',
    component: LoginComponent,
    canActivate: [NotAuthGuard],
  },
  {
    path: 'blogs',
    component: BlogsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'blogs/add',
    component: AddBlogFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'blogs/users/:id',
    component: CurrentUserBlogsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-blog/:id',
    component: EditBlogComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'auth/login' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
