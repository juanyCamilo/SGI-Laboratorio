import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuCollapsed = !this.menuCollapsed;
  }

}