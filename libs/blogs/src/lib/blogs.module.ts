import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added
import { MaterialModule } from '@botmind-app/material';
import { BlogsComponent } from './containers/blogs/blogs.component';
import { BlogComponent } from './components/blog/blog.component';
import { AuthGuard } from '@botmind-app/authentication';
import { AuthService } from '@botmind-app/service/auth';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule.forChild([{ path: '', component: BlogsComponent }])],
  declarations: [BlogsComponent, BlogComponent],
  providers: [AuthGuard, AuthService],
})
export class BlogsModule {}
