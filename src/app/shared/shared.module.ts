import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ScrollSpyDirective } from './directives/scroll-spy.directive';

@NgModule({
  declarations: [ScrollSpyDirective],
  imports: [
    CommonModule,
    AngularMaterialModule,
    
  ],
  exports: [
    AngularMaterialModule,
    ScrollSpyDirective
  ],
})
export class SharedModule { }
