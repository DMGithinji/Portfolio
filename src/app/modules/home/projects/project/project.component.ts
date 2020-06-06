import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'app/data/projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project;
  
  constructor() { }

  ngOnInit(): void {
  }

  public setStyles(project): any {
    let styles = {
      'background': project.theme
    };
    return styles;
  }
}
