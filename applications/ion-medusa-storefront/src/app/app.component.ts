import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonFooter, IonApp, IonButton, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel,
  IonRouterOutlet,
  IonToolbar
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { IonicModule } from '@ionic/angular';
import { IconsService } from './shared/utils/icons.service';

export const CHECKOUT_URL = 'checkout';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    IonRouterOutlet,
    CommonModule,
    IonicModule,
  ],
})
export class AppComponent {


  public appPages = [
    { title: 'Home', url: '/tabs/home', icon: 'home' },
    { title: 'Settings', url: '/folder/settings', icon: 'cog' },
    // { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    // { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  private icons = inject(IconsService);

  ceckoutUrl: string = CHECKOUT_URL;

}
