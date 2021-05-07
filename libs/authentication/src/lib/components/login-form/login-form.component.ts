import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '@botmind-app/service/auth';
import { Router } from '@angular/router';
import { AuthGuard } from '@botmind-app/authentication';

@Component({
  selector: 'botmind-app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  processing = false;
  form: FormGroup;
  previousUrl;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private authGuard: AuthGuard,
    private toastr: ToastrService
  ) {
    this.createForm();
  }

  // Function to create login form
  createForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // Function to disable form
  disableForm() {
    this.form.controls['username'].disable();
    this.form.controls['password'].disable();
  }

  // Function to enable form
  enableForm() {
    this.form.controls['username'].enable();
    this.form.controls['password'].enable();
  }

  // Functiont to submit form and login user
  onLoginSubmit() {
    this.processing = true;
    this.disableForm();
    const user = {
      username: this.form.get('username').value,
      password: this.form.get('password').value,
    };
    this.authService.login(user.username, user.password).subscribe(
      data => {
        if (!data.success) {
          this.form.reset();
          this.toastr.error(data.msg, 'MESSAGE');
          this.processing = false;
          this.enableForm();
        } else {
          this.form.reset();
          this.authService.storeUserData(data);
          this.toastr.success(data.message, 'MESSAGE');
          setTimeout(() => {
            this.enableForm();
            this.router.navigate(['/blogs']);
          }, 2000);
        }
      },
      error => {
        setTimeout(() => {
          this.processing = false;
          this.enableForm();
        }, 2000);
        this.toastr.error('Utilisateur introuvable', 'MESSAGE');
      }
    );
  }

  ngOnInit() {
    if (this.authGuard.redirectUrl) {
      this.toastr.error('Vous devez être connecté pour acceder à cette page.', 'MESSAGE');
      this.previousUrl = this.authGuard.redirectUrl;
      this.authGuard.redirectUrl = undefined;
    }
  }
}
