import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'header-component',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ]
})
export class HeaderComponent {

  @Input() pageTitle!: string;

  @Input() avatar!: string;

  @Input() menuId!: string;

  @Input() showSearchBar? = true;

  isLoggedIn = true;

  onSearchChange(event: any) {
    console.log(event.detail.value);
  }
}
