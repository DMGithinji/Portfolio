import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { SharedModule } from '@shared/shared.module';
import { ProjectComponent } from './projects/project/project.component';
import { EducationComponent } from './education/education.component';
import { PreviouslyComponent } from './previously/previously.component';



@NgModule({
  declarations: [HomeComponent, HeroComponent, AboutComponent, ProjectsComponent, SkillsComponent, ProjectComponent, EducationComponent, PreviouslyComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
