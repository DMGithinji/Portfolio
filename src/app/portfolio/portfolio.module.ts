import { ExperiencesComponent } from './experiences/experiences.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material';

import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    SidenavComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    ExperiencesComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTabsModule,
    
  ],
  exports: [
    SidenavComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    ExperiencesComponent,
    FooterComponent,


    
  ],
})
export class PortfolioModule { }
