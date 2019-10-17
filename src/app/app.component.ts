import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
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

  navOn(){
    this.navActive = !this.navActive;
    // console.log("Click!");
  }
}
