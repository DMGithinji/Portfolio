import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { SharedModule } from '@shared/shared.module';

import { AuthRoutingModule } from './auth.routing';

@NgModule({
  declarations: [
    LoginComponent, 
  ],
  imports: [
    CommonModule,    
    SharedModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }