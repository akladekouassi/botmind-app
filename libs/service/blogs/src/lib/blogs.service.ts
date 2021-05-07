import { Injectable } from '@angular/core';
import { AuthService } from '@botmind-app/service/auth';
import { RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../../../apps/frontend/src/environments/environment';

const headers = new HttpHeaders({ 'Content-type': 'application/json' });

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  userAuthenticated: any;
  options: RequestOptions;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  newBlog(blog: any): Observable<any> {
    return this.http.post(environment.ADD_NEW_BLOG_API_URL, blog, { headers });
  }

  // Function to get all blogs from the database
  getAllBlogs(): any {
    return this.http.get<any>(environment.GET_ALL_BLOGS_API_URL, { headers });
  }

  getSingleBlog(id: string): Observable<any> {
    return this.http.get(environment.GET_SINGLE_BLOG_API_URL + id, { headers });
  }
  getBlogsForUser(userID: string): Observable<any> {
    return this.http.get(environment.GET_BLOGS_FOR_USER_API_URL + userID, { headers });
  }

  editBlog(blog: any): Observable<any> {
    return this.http.put(environment.UPDATE_BLOG_API_URL, blog, { headers });
  }

  deleteBlog(id: string): Observable<any> {
    return this.http.delete(environment.DELETE_BLOG_API_URL + id, { headers });
  }

  // Function to like a blog post
  likeBlog(id: string): Observable<any> {
    const blogData = { id };
    return this.http.put(environment.LIKE_A_BLOG_API_URL, blogData, { headers });
  }

  // Function to dislike a blog post
  dislikeBlog(id: string): Observable<any> {
    const blogData = { id };
    return this.http.put(environment.DISLIKE_A_BLOG_API_URL, blogData, { headers });
  }

  // Function to post a comment on a blog post
  postComment(id: string, comment: string): Observable<any> {
    const blogData = {
      id,
      comment: comment,
    };
    return this.http.post(environment.COMMENT_A_BLOG_API_URL, blogData, { headers });
  }
}
