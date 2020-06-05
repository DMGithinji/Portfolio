import { Component, OnInit } from '@angular/core';
import { TechstackItem, TechstackDB, Category } from 'app/data/techstack';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent implements OnInit {

  techstack: Array<TechstackItem> = TechstackDB.techstack;
  displayedTracks: Array<TechstackItem>
  activeCategory: Category = "all";

  constructor() { }

  ngOnInit(): void {
    this.displayedTracks = this.techstack;
  }

  getStack = (category:Category): Array<TechstackItem> => {
    this.activeCategory = category;
    switch (category) {
      case 'all':
        return this.displayedTracks = this.techstack;
      default:
        return this.displayedTracks = this.stackFilter(this.techstack, category);
    }
  }

  stackFilter = (techstack: Array<TechstackItem>,  category: Category ): Array<TechstackItem> => {
    return techstack.filter(item => item.category === category);
  }

}
