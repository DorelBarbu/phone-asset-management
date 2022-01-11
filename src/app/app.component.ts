import { Component } from '@angular/core';
import phones from 'src/mocks/phones';
import Phone from 'src/types/phone';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  phones: Phone[] = phones;
}
