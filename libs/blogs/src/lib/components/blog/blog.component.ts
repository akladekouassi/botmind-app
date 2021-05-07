import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { BlogsService } from '@botmind-app/service/blogs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '@botmind-app/service/auth';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'botmind-app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  // @ViewChild(MatAccordion) accordion: MatAccordion;
  blogs: any[] = [];
  message;
  messageClass;
  foundBlog = false;
  processing = false;
  blog;
  currentUrl;
  animal: string;
  name: string;
  currentUser;
  newPost = false;
  canDisplayCommentField: boolean = false;
  canDisplayLikers: boolean = false;
  canDisplayDislikers: boolean = false;
  loadingBlogs = false;
  form;
  commentForm;
  username;
  blogPosts;
  newComment = [];
  enabledComments = [];
  users: [] = [];
  activeIdx: number;

  constructor(
    private blogService: BlogsService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    public dialog: MatDialog // public navCtrl: NgxNavigationWithDataComponent
  ) {
    this.createCommentForm();
  }

  // Function to post a new comment on blog post
  draftComment(id) {
    this.commentForm.reset(); // Reset the comment form each time users starts a new comment
    this.newComment = []; // Clear array so only one post can be commented on at a time
    this.newComment.push(id); // Add the post that is being commented on to the array
  }

  // Function to cancel new post transaction
  cancelSubmission(id) {
    const index = this.newComment.indexOf(id); // Check the index of the blog post in the array
    this.newComment.splice(index, 1); // Remove the id from the array to cancel post submission
    this.commentForm.reset(); // Reset  the form after cancellation
    this.enableCommentForm(); // Enable the form after cancellation
    this.processing = false; // Enable any buttons that were locked
  }

  reloadBlogs() {
    this.loadingBlogs = true; // Used to lock button
    this.loadBlogs(); // Add any new blogs to the page
    setTimeout(() => {
      this.loadingBlogs = false; // Release button lock after four seconds
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
  createCommentForm() {
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(200)])],
    });
  }

  // Enable the comment form
  enableCommentForm() {
    this.commentForm.get('comment').enable(); // Enable comment field
  }

  // Disable the comment form
  disableCommentForm() {
    this.commentForm.get('comment').disable(); // Disable comment field
  }

  getBlogAutor(id: string) {
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
          console.log('THE BLOGSSSS::', response.blogs);
        }
      },
      error => {}
    );
  }

  deleteBlog(blogID: string) {
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

  // Function to like a blog post
  likeBlog(id) {
    this.blogService.likeBlog(id).subscribe(data => {
      if (!data.success) {
        console.log('likeeee', data);
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

  // Expand the list of comments
  expand(id) {
    this.enabledComments.push(id); // Add the current blog post id to array
  }

  // Collapse the list of comments
  collapse(id) {
    const index = this.enabledComments.indexOf(id); // Get position of id in array
    this.enabledComments.splice(index, 1); // Remove id from array
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
        if (this.enabledComments.indexOf(id) < 0) this.expand(id); // Expand comments for user on comment submission
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
