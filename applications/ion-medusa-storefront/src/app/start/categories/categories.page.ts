import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../components/app-header/app-header.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderComponent
  ]
})
export class CategoriesPage implements OnInit {

  pageTitle = 'Categories';

  avatar = 'assets/shapes.svg';

  constructor() { }

  ngOnInit() {
  }

  onSearchChange(event: any) {
    console.log(event.detail.value);
  }

}
