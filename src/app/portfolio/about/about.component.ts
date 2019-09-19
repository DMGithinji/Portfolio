import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  seeking: boolean = false;
  current: boolean = false;
  summary: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  

  showSummary=()=>{
    this.summary=true;
    this.current=false;
    this.seeking=false;

  }
  showCurrent=()=>{
    this.current=true;
    this.seeking=false;
    this.summary=false;
  }
  showFuture=()=>{
    this.seeking=true;
    this.current=false;
    this.summary=false;
  }

}
