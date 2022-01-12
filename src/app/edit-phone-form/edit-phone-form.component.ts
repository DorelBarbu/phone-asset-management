import { Component, Input, OnInit } from '@angular/core';
import Phone from 'src/types/phone';

@Component({
  selector: 'app-edit-phone-form',
  templateUrl: './edit-phone-form.component.html',
  styleUrls: ['./edit-phone-form.component.css'],
})
export class EditPhoneFormComponent implements OnInit {
  @Input()
  phone: Phone;

  constructor() {}

  ngOnInit(): void {}
}
