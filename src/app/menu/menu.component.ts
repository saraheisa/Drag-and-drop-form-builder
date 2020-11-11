import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isOpened = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isOpened = !this.isOpened;
  }

}
