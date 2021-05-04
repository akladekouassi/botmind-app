import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
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
  messageClass;
  message;
  processing = false;
  form;
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

    // Function to send login data to API
    this.authService.login(user.username, user.password).subscribe(data => {
      if (!data.user) {
        this.toastr.error('Une erreur est arrivée', 'MESSAGE');
        this.processing = false;
        this.enableForm();
      } else {
        this.authService.storeUserData(data.user, data.token);
        this.toastr.success('Connecté avec succes', 'MESSAGE');
        setTimeout(() => {
          this.router.navigate(['blogs']);
        }, 2000);
      }
    });
  }

  ngOnInit() {
    if (this.authGuard.redirectUrl) {
      this.toastr.error('Vous devez être connectés pour acceder a cette page.', 'erreur');
      this.previousUrl = this.authGuard.redirectUrl;
      this.authGuard.redirectUrl = undefined;
    }
  }
}
