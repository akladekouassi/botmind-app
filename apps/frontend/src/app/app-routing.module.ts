import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent, RegisterComponent, NotAuthGuard, AuthGuard } from '@botmind-app/authentication';
import { BlogsComponent } from '@botmind-app/blogs';
import { LoginFormComponent } from 'libs/authentication/src/lib/components/login-form/login-form.component';
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
    component: LoginComponent, // Default Route
  },
  {
    path: 'auth/register',
    component: RegisterComponent, // Register Route
    canActivate: [NotAuthGuard], // User must NOT be logged in to view this route
  },
  {
    path: 'auth/login',
    component: LoginComponent, // Login Route
    canActivate: [NotAuthGuard], // User must NOT be logged in to view this route
  },
  // {
  //   path: 'profile',
  //   component: ProfileComponent, // Profile Route
  //   canActivate: [AuthGuard], // User must be logged in to view this route
  // },
  {
    path: 'blogs',
    component: BlogsComponent, // Blog Route,
    canActivate: [AuthGuard], // User must be logged in to view this route
  },
  {
    path: 'blogs/add',
    component: AddBlogFormComponent,
    canActivate: [AuthGuard], // User must NOT be logged in to view this route
  },
  {
    path: 'blogs/users/:id',
    component: CurrentUserBlogsComponent,
    canActivate: [AuthGuard], // User must NOT be logged in to view this route
  },
  {
    path: 'edit-blog/:id',
    component: EditBlogComponent, // Edit Blog Route
    canActivate: [AuthGuard], // User must be logged in to view this route
  },
  {
    path: 'profile',
    component: ProfileComponent, // Edit Blog Route
    canActivate: [AuthGuard], // User must be logged in to view this route
  },
  // {
  //   path: 'delete-blog/:id',
  //   component: DeleteBlogComponent, // Delete Blog Route
  //   canActivate: [AuthGuard], // User must be logged in to view this route
  // },
  // {
  //   path: 'user/:username',
  //   component: PublicProfileComponent, // Public Profile Route
  //   canActivate: [AuthGuard], // User must be logged in to view this route
  // },
  { path: '**', redirectTo: 'auth/login' }, // "Catch-All" Route
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
