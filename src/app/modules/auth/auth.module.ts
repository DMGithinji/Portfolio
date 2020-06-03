import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { AuthRoutingModule } from './auth.routing';
import { ResetPasswordComponent } from './forms/reset-password/reset-password.component';
import { AngularMaterialModule } from '@shared/angular-material/angular-material.module';
import { SignupComponent } from './forms/signup/signup.component';
import { AuthPageComponent } from './authpage/auth-page.component';
import { LoginComponent } from './forms/login/login.component';

@NgModule({
  declarations: [
    AuthPageComponent,
    SignupComponent,
    ResetPasswordComponent,
    LoginComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    AngularMaterialModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
