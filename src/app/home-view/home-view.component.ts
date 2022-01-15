import { Component, OnInit } from '@angular/core';
import { RouteConfiguration } from '../common/navigation-bar/navigation-bar.component';

export const ABOUT_PATH = 'about';
export const PHONES_PATH = 'phones';
export const LOGIN_PATH = 'login';
export const CREATE_PHONE_PATH = '/create'

const routeConfiguration: RouteConfiguration = {
  [PHONES_PATH]: 'All Phones',
  [CREATE_PHONE_PATH]: 'Add new phone',
  'signout': 'Log out',
}

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  routeConfiguration: RouteConfiguration = routeConfiguration;

  constructor() { }

  ngOnInit(): void {
  }

}
