import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { BlogsService } from '@botmind-app/service/blogs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '@botmind-app/service/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Blog, User } from 'libs/data-models';
import { Observable } from 'rxjs';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'botmind-app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blogs: Blog[];
  processing = false;
  currentUrl;
  currentUser;
  canDisplayCommentField: boolean = false;
  canDisplayLikers: boolean = false;
  canDisplayDislikers: boolean = false;
  loadingBlogs = false;
  form;
  commentForm;
  newComment = [];
  enabledComments = [];
  users: User[] = [];
  activeIdx: number;

  constructor(
    private blogService: BlogsService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService
  ) {
    this.createCommentForm();
  }

  // Function to post a new comment on blog post
  draftComment(id) {
    this.commentForm.reset();
    this.newComment = [];
    this.newComment.push(id);
  }

  // Function to cancel new post transaction
  cancelSubmission(id) {
    const index = this.newComment.indexOf(id);
    this.newComment.splice(index, 1);
    this.commentForm.reset();
    this.enableCommentForm();
    this.processing = false;
  }

  reloadBlogs() {
    this.loadingBlogs = true;
    this.loadBlogs();
    setTimeout(() => {
      this.loadingBlogs = false;
    }, 4000);
  }
  canComment(i) {
    this.activeIdx = i;
    this.canDisplayDislikers = false;
    this.canDisplayLikers = false;
    return this.canDisplayCommentField ? (this.canDisplayCommentField = false) : (this.canDisplayCommentField = true);
  }

  canDisplayLiker(i) {
    this.activeIdx = i;
    this.canDisplayDislikers = false;
    this.canDisplayCommentField = false;
    return this.canDisplayLikers ? (this.canDisplayLikers = false) : (this.canDisplayLikers = true);
  }

  canDisplayDisLikers(i) {
    this.activeIdx = i;
    this.canDisplayLikers = false;
    this.canDisplayCommentField = false;
    return this.canDisplayDislikers ? (this.canDisplayDislikers = false) : (this.canDisplayDislikers = true);
  }

  // Create form for posting comments
  createCommentForm(): void {
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(200)])],
    });
  }

  // Enable the comment form
  enableCommentForm(): void {
    this.commentForm.get('comment').enable();
  }

  // Disable the comment form
  disableCommentForm(): void {
    this.commentForm.get('comment').disable();
  }

  getBlogAutor(id: string): string | string[] {
    if (id === this.currentUser._id) {
      return 'Moi';
    } else {
      return this.users.filter((user: any) => user._id === id).map((user: any) => user.username);
    }
  }

  loadUsers() {
    return this.authService.getAllUsers().subscribe(response => {
      this.users = response.users;
    });
  }

  loadBlogs() {
    this.blogService.getAllBlogs().subscribe(
      response => {
        if (response.success) {
          this.blogs = response.blogs;
        }
      },
      error => {}
    );
  }

  deleteBlog(blogID: string) {
    if (window.confirm('Voulez vous vraiment supprimer cet blog?')) {
      this.processing = true;
      this.blogService.deleteBlog(blogID).subscribe(data => {
        if (!data.success) {
          this.toastr.error(data.message, 'SUCCESS');
        } else {
          this.loadBlogs();
          this.toastr.success(data.message, 'SUCCESS');
        }
      });
    }
  }

  // Function to like a blog post
  likeBlog(id) {
    this.blogService.likeBlog(id).subscribe(data => {
      if (!data.success) {
        this.toastr.error(data.message, 'ERROR');
      } else {
        this.loadBlogs();
        this.toastr.success(data.message, 'SUCCESS');
      }
    });
  }

  // Function to disliked a blog post
  dislikeBlog(id) {
    // Service to dislike a blog post
    this.blogService.dislikeBlog(id).subscribe(data => {
      if (!data.success) {
        this.toastr.error(data.message, 'ERROR');
      } else {
        this.loadBlogs();
        this.toastr.success(data.message, 'SUCCESS');
      }
    });
  }

  // Function to post a new comment
  postComment(id: string) {
    this.disableCommentForm();
    this.processing = true;
    const comment = this.commentForm.get('comment').value;
    this.blogService.postComment(id, comment).subscribe(data => {
      if (data.success) {
        this.toastr.success(data.message, 'SUCCESS');
        this.loadBlogs();
        const index = this.newComment.indexOf(id);
        this.newComment.splice(index, 1);
        this.enableCommentForm();
        this.commentForm.reset();
        this.processing = false;
      } else {
        this.toastr.error(data.message, 'ERROR');
      }
    });
  }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.loadBlogs();
    this.loadUsers();
  }
}
