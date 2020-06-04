import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  title = 'DMG-Portfolio';
  currentSection: string = 'section1';
  navActive: boolean = false;

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
    this.navActive = false;
  }

  navOn() {
    this.navActive = !this.navActive;
  }
}
