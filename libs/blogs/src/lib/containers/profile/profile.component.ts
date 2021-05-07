import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '@botmind-app/service/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'botmind-app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user;
  canDisplayField: boolean = false;
  form: FormGroup;
  currentUser: any;
  processing: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.createForm();
  }

  modify() {
    this.form.get('lastName').setValue(this.user.lastName);
    this.form.get('firstName').setValue(this.user.firstName);
    this.form.get('phoneNumber').setValue(this.user.phoneNumber);
    this.form.get('username').setValue(this.user.username);
    this.form.get('email').setValue(this.user.email);
    return this.canDisplayField ? (this.canDisplayField = false) : (this.canDisplayField = true);
  }

  getUser() {
    this.authService.getProfile().subscribe(response => (this.user = response.user));
  }

  deleteAccount() {
    if (window.confirm('Êtes vous sûr de cette action ? elle est irreversible!')) {
      this.authService.deleteAccount(this.user.username, this.user.email).subscribe(response => {
        this.toastr.success(response.message, 'SUCCESS');
        this.router.navigate(['/auth/login']);
        localStorage.clear();
      });
    }
  }

  ngOnInit(): void {
    this.getUser();
  }

  // Function to create registration form
  createForm() {
    this.form = this.formBuilder.group(
      {
        email: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(30),
            this.validateEmail,
          ]),
        ],
        username: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(15),
            this.validateOrdinaryText,
          ]),
        ],
        // Password Input
        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(35),
            this.validatePassword,
          ]),
        ],
        firstName: [
          '',

          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
            this.validateOrdinaryText,
          ]),
        ],
        lastName: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
            this.validateOrdinaryText,
          ]),
        ],
        phoneNumber: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
            this.validatePhoneNumber,
          ]),
        ],
        // Confirm Password Input
        confirm: ['', Validators.required],
      },
      { validator: this.matchingPasswords('password', 'confirm') }
    );
  }

  // Function to disable the registration form
  disableForm(): void {
    this.form.controls['email'].disable();
    this.form.controls['username'].disable();
    this.form.controls['password'].disable();
    this.form.controls['firstName'].disable();
    this.form.controls['lastName'].disable();
    this.form.controls['phoneNumber'].disable();
    this.form.controls['confirm'].disable();
  }

  // Function to enable the registration form
  enableForm(): void {
    this.form.controls['email'].enable();
    this.form.controls['username'].enable();
    this.form.controls['password'].enable();
    this.form.controls['firstName'].enable();
    this.form.controls['lastName'].enable();
    this.form.controls['phoneNumber'].enable();
    this.form.controls['confirm'].enable();
  }

  // Function to validate e-mail is proper format
  validateEmail(controls) {
    const regExp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { validateEmail: true };
    }
  }

  // Function to validate username is proper format
  validatePhoneNumber(controls) {
    const regExp = new RegExp(
      /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/
    );
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { validatePhoneNumber: true };
    }
  }

  validateOrdinaryText(controls) {
    const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);

    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { validateOrdinaryText: true };
    }
  }

  validatePassword(controls) {
    const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { validatePassword: true };
    }
  }

  matchingPasswords(password, confirm) {
    return (group: FormGroup) => {
      if (group.controls[password].value === group.controls[confirm].value) {
        return null;
      } else {
        return { matchingPasswords: true };
      }
    };
  }

  checkEmail(): void {
    const regExp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (this.form.get('email').value !== '' && regExp.test(this.form.get('email').value)) {
      this.authService.checkEmail(this.form.get('email').value).subscribe(data => {
        if (!data.success) {
          this.toastr.error(data.message, 'MESSAGE');
        } else {
          this.toastr.success(data.message, 'MESSAGE');
        }
      });
    }
  }

  checkUsername(): void {
    if (this.form.get('username').value !== '' && this.form.get('username').value.length >= 3) {
      this.authService.checkUsername(this.form.get('username').value).subscribe(data => {
        if (!data.success) {
          this.toastr.error(data.message, 'MESSAGE');
        } else {
          this.toastr.success(data.message, 'MESSAGE');
        }
      });
    }
  }

  // Function to submit form
  onRegisterSubmit() {
    this.processing = true;
    this.disableForm();
    const user = {
      email: this.form.get('email').value,
      username: this.form.get('username').value,
      password: this.form.get('password').value,
      lastName: this.form.get('lastName').value,
      firstName: this.form.get('firstName').value,
      phoneNumber: this.form.get('phoneNumber').value,
    };

    this.authService.modifyProfile(user, this.user._id).subscribe(data => {
      if (!data.success) {
        this.toastr.error(data.message, 'MESSAGE');
        this.processing = false;
        this.enableForm();
      } else {
        this.getUser();
        this.canDisplayField = false;
        this.toastr.success(data.message, 'MESSAGE');
        this.form.reset();
      }
    });
  }
}
