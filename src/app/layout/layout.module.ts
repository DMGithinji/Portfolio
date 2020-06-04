import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'app/app-routing.module';

import { ContentComponent } from './content/content.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '@shared/angular-material/angular-material.module';

const components = [ContentComponent, SidenavComponent];


@NgModule({
  declarations: [ContentComponent, SidenavComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularMaterialModule
  ],
  exports: components
})

export class LayoutModule { }
