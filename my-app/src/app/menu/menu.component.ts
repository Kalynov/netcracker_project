import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items =["add", "tascs", "process", "search", "profile"];
  iconItems = [
    "assets/image/add.svg",
    "assets/image/tascs.svg",
    "assets/image/process.svg",
    "assets/image/search.svg",
    "assets/image/profileLogo.svg"
  ];

  constructor() {

  }

  ngOnInit() {
  }

}
