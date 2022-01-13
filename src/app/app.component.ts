import { Component } from '@angular/core';
import phones from 'src/mocks/phones';
import Phone from 'src/types/phone.type';
import { ABOUT_PATH, LOGIN_PATH, PHONES_PATH } from './app-routing.module';
import { RouteConfiguration } from './navigation-bar/navigation-bar.component';

const routeConfiguration: RouteConfiguration = {
  [ABOUT_PATH]: 'About',
  [PHONES_PATH]: 'Phones',
  [LOGIN_PATH]: 'Login',
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  phones: Phone[] = phones;
  routeConfiguration: RouteConfiguration = routeConfiguration;
}
