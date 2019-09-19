import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  backend: boolean = false;
  frontend: boolean = false;
  general: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  

  showGeneral=()=>{
    this.general=true;
    this.backend=false;
    this.frontend=false;

  }
  showFrontend=()=>{
    this.frontend=true;
    this.backend=false;
    this.general=false;
  }
  showBackend=()=>{
    this.backend=true;
    this.frontend=false;
    this.general=false;
  }

}
