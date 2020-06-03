import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '@shared/_helpers/must-match.validators';
import { MyErrorStateMatcher } from '@shared/_helpers/error-state-matcher.matcher';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(
    private fb: FormBuilder
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
    console.log(this.signupForm.value);
  }

}
