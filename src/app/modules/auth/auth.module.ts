import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { SharedModule } from '@shared/shared.module';

import { AuthRoutingModule } from './auth.routing';
import { ResetPasswordComponent } from './page/reset-password/reset-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordComponent, 
  ],
  imports: [
    CommonModule,    
    SharedModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
