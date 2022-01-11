import { Component, Input, OnInit } from '@angular/core';
import phones from 'src/mocks/phones';
import Phone from '../../types/phone';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  @Input()
  phones: Phone[] = [];

  ngOnInit(): void {
    console.log('phone-list ngOnInit', this.phones);
  }

}
