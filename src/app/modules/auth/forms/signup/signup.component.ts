import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '@shared/_helpers/must-match.validators';
import { MyErrorStateMatcher } from '@shared/_helpers/error-state-matcher.matcher';
import { AuthService } from 'app/data/service/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  loading = false;  // loader while awaiting response

  constructor(
    private fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.buildSignupForm();
  }

  buildSignupForm = () => {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'password2')
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  register = () => {
    if (this.signupForm.invalid) {
      return;
    }
    console.log("Form - ", this.signupForm.value);
    this.loading = true;
    this._auth.signUp(this.signupForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          console.log("Signup data-", data);
          this.loading = false;
          // this._router.navigate(['/dashboard']);
        },
        (error) => {
          this.loading = false;
          console.log("Login Error-", error);
        }
      );
  }

}
