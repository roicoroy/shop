import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperFormPage } from './stepper-form.page';

describe('StepperFormPage', () => {
  let component: StepperFormPage;
  let fixture: ComponentFixture<StepperFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StepperFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
