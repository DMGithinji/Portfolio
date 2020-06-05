import { Component, OnInit } from '@angular/core';
import { Project, ProjectDB } from 'app/data/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Array<Project> = ProjectDB.projects;

  constructor() { }

  ngOnInit(): void {
    console.log(this.projects);
  }

}
