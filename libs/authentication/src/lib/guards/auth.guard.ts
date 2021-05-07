import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@botmind-app/service/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  redirectUrl;
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.redirectUrl = state.url; // Grab previous urul
      this.router.navigate(['auth/login']); // Return error and route to login page
      return false; // Return false: user not authorized to view page
    }
  }
}
