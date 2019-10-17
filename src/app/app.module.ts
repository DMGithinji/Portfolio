import { ScrollSpyDirective } from './directives/scroll-spy.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ContactComponent } from './portfolio/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ScrollSpyDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PortfolioModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
