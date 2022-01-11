import { Component, OnInit } from '@angular/core';
import phones from 'src/mocks/phones';
import Phone from '../../../types/phone';
@Component({
  selector: 'app-phone-list-container',
  templateUrl: './phone-list-container.component.html',
  styleUrls: ['./phone-list-container.component.css']
})
export class PhoneListContainerComponent implements OnInit {

  phones: Phone[] = phones;

  constructor() { }

  ngOnInit(): void {
  }

}
