import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from '@botmind-app/service/blogs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'botmind-app-current-user-blogs',
  templateUrl: './current-user-blogs.component.html',
  styleUrls: ['./current-user-blogs.component.scss'],
})
export class CurrentUserBlogsComponent implements OnInit {
  blogs: any[] = [];
  currentUser: any;
  message;
  messageClass;
  foundBlog = false;
  processing = false;
  blog;
  currentUrl;
  animal: string;
  name: string;
  newPost = false;
  loadingBlogs = false;
  canDisplayCommentField: boolean = false;
  canDisplayLikers: boolean = false;
  canDisplayDislikers: boolean = false;
  activeIdx: number;
  form;
  commentForm;
  username;
  blogPosts;
  newComment = [];
  enabledComments = [];

  constructor(
    private blogService: BlogsService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.loadBlogs();
  }
  loadBlogs() {
    this.blogService.getBlogsForUser(this.currentUser._id).subscribe(
      response => {
        if (response.success) {
          this.blogs = response.blogs;
        }
      },
      error => {}
    );
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
}
