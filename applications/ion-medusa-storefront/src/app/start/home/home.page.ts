import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../components/app-header/app-header.component';
import { SharedDirectivesModule } from '../../shared/directives/shared-directives.module';
import { MaterialModule } from 'src/app/shared/material.module';

export interface IProduct {
  id: any,
  img: any,
  description: any,
  price: any,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderComponent,
    SharedDirectivesModule,
    MaterialModule
  ]
})
export class HomePage {

  pageTitle = 'Home';

  avatar = 'assets/shapes.svg';

  testData = [
    {
      id: 1,
      img: 'assets/shapes.svg',
      text: 'hello'
    },
    {
      id: 2,
      img: 'assets/shapes.svg',
      text: 'hello'
    },
    {
      id: 3,
      img: 'assets/shapes.svg',
      text: 'hello'
    },
    {
      id: 4,
      img: 'assets/shapes.svg',
      text: 'hello'
    },
    {
      id: 5,
      img: 'assets/shapes.svg',
      text: 'hello'
    },
    {
      id: 6,
      img: 'assets/shapes.svg',
      text: 'hello'
    },
    {
      id: 7,
      img: 'assets/shapes.svg',
      text: 'hello'
    },
    {
      id: 8,
      img: 'assets/shapes.svg',
      text: 'hello'
    },
    {
      id: 9,
      img: 'assets/shapes.svg',
      text: 'hello'
    },
    {
      id: 10,
      img: 'assets/shapes.svg',
      text: 'hello'
    },
    {
      id: 11,
      img: 'assets/shapes.svg',
      text: 'hello'
    },
  ];

  prodcutsData: IProduct[] = [
    {
      id: 1,
      img: 'assets/shapes.svg',
      description: 'hello',
      price: 12300
    },
  ];

  segment: string = 'sales';

  segmentChanged($event: any) {
    this.segment = $event.detail.value;
  }

  dasherize(string: any) {
    return string.replace(/[A-Z]/g, function (char: any, index: any) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };

}
