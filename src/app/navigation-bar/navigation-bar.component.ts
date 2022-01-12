import { Route } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

export interface RouteConfiguration {
  [key: string]: string
}

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  @Input()
  routes: RouteConfiguration

  constructor() { }

  ngOnInit(): void {
    console.log('navigation bar ', this.routes);
  }

}
