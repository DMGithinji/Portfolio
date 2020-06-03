import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'app/app-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { ContentComponent } from './content/content.component';
import { ErrorsComponent } from './errors/errors.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '@shared/angular-material/angular-material.module';

const components = [HeaderComponent, FooterComponent, AuthComponent, ContentComponent, ErrorsComponent, SidenavComponent];


@NgModule({
  declarations: [HeaderComponent, FooterComponent, AuthComponent, ContentComponent, ErrorsComponent, SidenavComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularMaterialModule
  ],
  exports: components
})

export class LayoutModule { }
