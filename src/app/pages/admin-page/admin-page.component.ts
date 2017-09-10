import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  leftMenuIsVisible: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  toggleLeftMenu() {
    this.leftMenuIsVisible = !this.leftMenuIsVisible;
  }

}
