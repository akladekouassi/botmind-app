import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@botmind-app/service/auth';

@Injectable()
export class NotAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate() {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/auth/login']);
      return false;
    } else {
      return true;
    }
  }
}
