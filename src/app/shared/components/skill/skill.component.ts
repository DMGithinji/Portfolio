import { Component, OnInit, Input } from '@angular/core';
import { TechstackItem } from 'app/data/techstack';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() techItem: TechstackItem;

  constructor() { }

  ngOnInit(): void {
  }

}
