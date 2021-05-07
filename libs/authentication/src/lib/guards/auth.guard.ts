import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '@botmind-app/service/auth';

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
      this.redirectUrl = state.url;
      this.router.navigate(['auth/login']);
      return false;
    }
  }
}
