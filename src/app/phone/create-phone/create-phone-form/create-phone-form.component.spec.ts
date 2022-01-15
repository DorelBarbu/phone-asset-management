import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePhoneFormComponent } from './create-phone-form.component';

describe('CreatePhoneFormComponent', () => {
  let component: CreatePhoneFormComponent;
  let fixture: ComponentFixture<CreatePhoneFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePhoneFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePhoneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
