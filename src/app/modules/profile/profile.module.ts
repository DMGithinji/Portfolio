import { SharedModule } from './../../shared/shared.module';
import { ProfileRoutingModule } from './profile.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSummaryComponent } from './page/profile-summary/profile-summary.component';



@NgModule({
  declarations: [ProfileSummaryComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
