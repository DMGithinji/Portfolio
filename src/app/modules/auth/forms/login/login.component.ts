import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '@shared/_helpers/error-state-matcher.matcher';
import { AuthService } from 'app/data/service/auth.service';

import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  loading = false;  // loader while awaiting response

  constructor(
    private fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.buildLoginForm();
  }

  buildLoginForm = () => {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login = () => {
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this._auth
      .login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          console.log("Login data-", data);
          this.loading = false;
          this._router.navigate(['/dashboard']);
        },
        (error) => {
          this.loading = false;
          console.log("Login Error-", error);
        }
      );
    }
}
