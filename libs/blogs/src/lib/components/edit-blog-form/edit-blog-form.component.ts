import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from '@botmind-app/service/blogs';
import { ToastrService } from 'ngx-toastr';
import { Blog } from 'libs/data-models/blogModels';

@Component({
  selector: 'botmind-app-edit-blog-form',
  templateUrl: './edit-blog-form.component.html',
  styleUrls: ['./edit-blog-form.component.scss'],
})
export class EditBlogFormComponent implements OnInit {
  blog: Blog;
  processing = false;
  currentUrl;
  loading: boolean = true;
  form: FormGroup;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private blogService: BlogsService,
    public router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {
    this.createNewBlogForm();
  }

  createNewBlogForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required, Validators.maxLength(80), Validators.minLength(5)])],
      body: ['', Validators.compose([Validators.required, Validators.maxLength(500), Validators.minLength(5)])],
    });
  }

  enableFormNewBlogForm() {
    this.form.get('title').enable();
    this.form.get('body').enable();
  }

  // Disable new blog form
  disableFormNewBlogForm() {
    this.form.get('title').disable();
    this.form.get('body').disable();
  }

  // Function to Submit Update
  updateBlogSubmit() {
    const blog = {
      title: this.form.get('title').value,
      body: this.form.get('body').value,
      _id: this.currentUrl.id,
    };
    this.processing = true;
    this.blogService.editBlog(blog).subscribe(data => {
      if (!data.success) {
        this.toastr.error(data.message, 'error');
        this.processing = false;
      } else {
        this.toastr.success(data.message, 'error');
        setTimeout(() => {
          this.router.navigate(['/blogs']);
        }, 2000);
      }
    });
  }

  // Function to go back to previous page
  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params;
    this.blogService.getSingleBlog(this.currentUrl.id).subscribe(data => {
      if (!data.success) {
      } else {
        this.form.get('title').setValue(data.blog.title);
        this.form.get('body').setValue(data.blog.body);
        this.loading = false;
      }
    });
  }
}
