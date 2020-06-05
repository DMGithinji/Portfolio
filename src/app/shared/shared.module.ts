import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ScrollSpyDirective } from './directives/scroll-spy.directive';
import { SkillComponent } from './components/skill/skill.component';

@NgModule({
  declarations: [ScrollSpyDirective, SkillComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    
  ],
  exports: [
    AngularMaterialModule,
    ScrollSpyDirective,
    SkillComponent
  ],
})
export class SharedModule { }
