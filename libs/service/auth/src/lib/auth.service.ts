import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../../apps/frontend/src/environments/environment';
const headers = new HttpHeaders({ 'Content-type': 'application/json' });

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authToken: string;
  userAuthenticated: any;
  options: RequestOptions;

  constructor(private http: Http, private httpClient: HttpClient) {
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
      }),
    });
  }

  // Function to get token from client local storage
  loadCurrentUser(): Observable<any> {
    return JSON.parse(localStorage.getItem('user')); // Get token and asssign to variable to be used elsewhere
  }

  // Function to register user accounts
  registerUser(user: any): Observable<any> {
    return this.http.post(environment.REGISTER_USER_API_URL, user, this.options).pipe(map(res => res.json()));
  }

  // Function to register user accounts
  modifyProfile(user: any, userID: string): Observable<any> {
    return this.httpClient.post(environment.UPDATE_USER_PROFILE_API_URL + userID, user, { headers });
  }
  // Function to register user accounts
  deleteAccount(username: any, email: string): Observable<any> {
    return this.httpClient.post(environment.LOCAL_API_URL + '/users/deleteAccount', { username, email }, { headers });
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
    localStorage.clear();
    return this.http.post(environment.LOGOUT_API_URL, {}).pipe(map(res => res.json()));
  }

  getAllUsers(): Observable<any> {
    return this.httpClient.get(environment.LOCAL_API_URL + '/users/getAllUsers', { headers });
  }

  // Function to store user's data in client local storage
  storeUserData(user: any) {
    const expiresAt = moment().add(Number.parseInt(user.expiresIn), 'days');
    localStorage.setItem('user', JSON.stringify(user.user));
    localStorage.setItem('id_token', user.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration(), 'second');
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    if (expiration) {
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
    } else {
      return moment();
    }
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  // Function to get user's profile data
  getProfile(): Observable<any> {
    return this.httpClient.get(environment.GET_USER_PROFILE_API_URL, { headers });
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
