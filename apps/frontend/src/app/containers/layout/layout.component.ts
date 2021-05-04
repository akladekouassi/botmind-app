import { Component, OnInit } from '@angular/core';
import { AuthService } from '@botmind-app/service/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'botmind-app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router, private toastr: ToastrService) {}

  onLogoutClick() {
    this.authService.logout().subscribe(response => {
      if (response.success) {
        this.toastr.success(response.message, 'SUCCESS');
        this.router.navigate(['/auth/login']);
      }
    });
  }

  ngOnInit(): void {
    console.log('CURRENT USER::', this.authService.loggedIn());
  }
}
