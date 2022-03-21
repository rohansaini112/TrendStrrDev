import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  constructor() { }
  flag:boolean = true;
  ngOnInit() {
  }
  logEvent(event) {
    console.log('here');
    this.flag = false;
  }
  setBack() {
    this.flag = true;
  }

}
