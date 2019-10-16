import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  navActive: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  navOn(){
    this.navActive = !this.navActive;
    console.log("Click!");
  }

}
