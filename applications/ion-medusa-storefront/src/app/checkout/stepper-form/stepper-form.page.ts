import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from 'src/app/shared/material.module';

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.page.html',
  styleUrls: ['./stepper-form.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class StepperFormPage implements OnInit {

  cartMock = [
    {
      productId: 1,
      price: '12312',
      quantity: 3
    },
    {
      productId: 2,
      price: '12312',
      quantity: 5
    },
    {
      productId: 3,
      price: '12312',
      quantity: 2
    }
  ]

  cartGroup!: FormGroup;

  addressGroup!: FormGroup;

  isLinear!: boolean;

  private _formBuilder = inject(FormBuilder);

  ngOnInit() {
    this.cartGroup = this._formBuilder.group({
      cart: this._formBuilder.array([])
    });
    this.addressGroup = this._formBuilder.group({
      billing: this.buildAddressFormGroup(),
      shipping: this.buildAddressFormGroup(),
    });
    this.initFormArray();
  }

  buildAddressFormGroup() {
    return new FormGroup({
      first_name: new FormControl('test', Validators.required),
      last_name: new FormControl('test', Validators.required),
      address_1: new FormControl('test', Validators.required),
      address_2: new FormControl('test', Validators.required),
      city: new FormControl('Edinburgh', Validators.required),
      postcode: new FormControl('ED88UJ', Validators.required),
      country: new FormControl('UK'),
      company: new FormControl('AMIGO'),
      phone: new FormControl('+7512345678', Validators.compose([
        Validators.required,
      ])),
    })
  }
  initFormArray() {
    this.cartMock.forEach(element => {
      this.cartControls.push(this._formBuilder.group({
        productId: element.productId,
        quantity: element.quantity,
        price: element.price,
      }));
    });
  }

  add(productId?: any, quantity?: any, price?: any) {
    this.cartControls.push(
      this._formBuilder.group({
        productId: [productId],
        quantity: [quantity],
        price: [price],
      })
    );
  }

  submitForm() {
    console.log(this.cartGroup.value);
    console.log(this.addressGroup.value.billing);
    console.log(this.addressGroup.value.shipping);
  }

  get cartControls() {
    return this.cartGroup?.get('cart') as FormArray;
  }

  addressControl(control: string): FormControl {
    return this.addressGroup.get(control) as FormControl;
  }
}
