import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlogsService } from '@botmind-app/service/blogs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BlogRegistrationPayload } from 'libs/data-models';

@Component({
  selector: 'botmind-app-add-blog-form',
  templateUrl: './add-blog-form.component.html',
  styleUrls: ['./add-blog-form.component.scss'],
})
export class AddBlogFormComponent implements OnInit {
  newPost = false;
  loadingBlogs = false;
  form;
  commentForm;
  processing = false;
  blogPosts;
  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogsService,
    private toastr: ToastrService,
    private router: Router,
    private location: Location
  ) {
    this.createNewBlogForm();
  }

  // Function to create new blog form
  createNewBlogForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required, Validators.maxLength(50), Validators.minLength(5)])],
      body: ['', Validators.compose([Validators.required, Validators.maxLength(500), Validators.minLength(5)])],
    });
  }

  // Enable new blog form
  enableFormNewBlogForm() {
    this.form.get('title').enable();
    this.form.get('body').enable();
  }

  // Disable new blog form
  disableFormNewBlogForm() {
    this.form.get('title').disable();
    this.form.get('body').disable();
  }

  // Reload blogs on current page
  reloadBlogs() {
    this.loadingBlogs = true;
    this.getAllBlogs();
    setTimeout(() => {
      this.loadingBlogs = false;
    }, 4000);
  }

  // Function to submit a new blog post
  onBlogSubmit() {
    this.processing = true;
    this.disableFormNewBlogForm();
    const currentUser = JSON.parse(localStorage.getItem('user'));

    const blog: BlogRegistrationPayload = {
      title: this.form.get('title').value,
      body: this.form.get('body').value,
      createdBy: currentUser._id,
    };

    this.blogService.newBlog(blog).subscribe(data => {
      if (!data.success) {
        this.toastr.error(data.message, 'ERROR');
        this.processing = false;
        this.enableFormNewBlogForm();
      } else {
        this.toastr.success(data.message, 'SUCCESS');
        this.getAllBlogs();
        setTimeout(() => {
          this.router.navigate(['/blogs']);
          this.processing = false;
          this.form.reset();
          this.enableFormNewBlogForm();
        }, 2000);
      }
    });
  }

  // Function to go back to previous page
  goBack() {
    window.location.reload();
    this.location.back();
  }

  // Function to get all blogs from the database
  getAllBlogs() {
    this.blogService.getAllBlogs().subscribe(data => {
      this.blogPosts = data.blogs;
    });
  }
  ngOnInit() {
    this.getAllBlogs();
  }
}
