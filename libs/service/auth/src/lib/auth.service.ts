import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../../apps/frontend/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authToken: string;
  userAuthenticated: any;
  options: RequestOptions;

  constructor(private http: Http) {
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
      }),
    });
  }

  // Function to get token from client local storage
  loadCurrentUser() {
    this.userAuthenticated = JSON.parse(localStorage.getItem('user')); // Get token and asssign to variable to be used elsewhere
  }

  // Function to register user accounts
  registerUser(user: any): Observable<any> {
    return this.http.post(environment.REGISTER_USER_API_URL, user, this.options).pipe(map(res => res.json()));
  }

  // Function to check if username is taken
  checkUsername(username: string): Observable<any> {
    return this.http.get(environment.CHECK_USERNAME_API_URL + username, this.options).pipe(map(res => res.json()));
  }

  // Function to check if e-mail is taken
  checkEmail(email: string): Observable<any> {
    return this.http.get(environment.CHECK_EMAIL_API_URL + email, this.options).pipe(map(res => res.json()));
  }

  // Function to login user
  login(username: string, password: string): Observable<any> {
    return this.http.post(environment.LOGIN_API_URL, { username, password }).pipe(map(res => res.json()));
  }

  // Function to logout
  logout() {
    this.authToken = null;
    this.userAuthenticated = null;
    localStorage.clear();
    return this.http.post(environment.LOGOUT_API_URL, {}).pipe(map(res => res.json()));
  }

  // Function to store user's data in client local storage
  storeUserData(user: any, token?: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.userAuthenticated = user;
  }

  // Function to get user's profile data
  getProfile(): Observable<any> {
    return this.http.get(environment.GET_USER_PROFILE_API_URL, this.options).pipe(map(res => res.json()));
  }

  // Function to get public profile data
  // getPublicProfile(username) {
  //   this.createAuthenticationHeaders(); // Create headers before sending to API
  //   return this.http.get(this.domain + 'authentication/publicProfile/' + username, this.options).map(res => res.json());
  // }

  // Function to check if user is logged in
  loggedIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  }
}
