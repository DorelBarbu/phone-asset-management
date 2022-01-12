import { Component, OnInit } from '@angular/core';
import { PhoneService } from 'src/app/services/phone.service';
import phones from 'src/mocks/phones';
import Phone from '../../../types/phone';
import { PhoneDataSource } from '../phone-datasource';
@Component({
  selector: 'app-phone-list-container',
  templateUrl: './phone-list-container.component.html',
  styleUrls: ['./phone-list-container.component.css'],
})
export class PhoneListContainerComponent implements OnInit {
  dataSource: PhoneDataSource = new PhoneDataSource();

  constructor(private phoneService: PhoneService) {}

  ngOnInit(): void {}
}
