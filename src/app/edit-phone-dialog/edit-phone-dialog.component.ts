import { Component, Input, OnInit } from '@angular/core';
import Phone from 'src/types/phone';

@Component({
  selector: 'app-edit-phone-dialog',
  templateUrl: './edit-phone-dialog.component.html',
  styleUrls: ['./edit-phone-dialog.component.css']
})
export class EditPhoneDialogComponent implements OnInit {

  @Input()
  phone: Phone = {
    id: 1,
    type: 'type 1',
    serial: '1234',
    color: 'black',
    metadata: 'dummy-metadata',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
