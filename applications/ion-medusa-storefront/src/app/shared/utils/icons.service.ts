import { Injectable } from '@angular/core';
import { addIcons } from 'ionicons';
import {
  close,
  remove,
  home,
  homeOutline, homeSharp, mailOutline, triangle, ellipse, square, mailSharp, search, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, contract, cart, cog, cogOutline, cogSharp, cartOutline, contractOutline, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp
} from 'ionicons/icons';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  constructor() {
    this.initIcons();
  }

  initIcons() {
    return addIcons({
      close,
      remove,
      home,
      homeOutline,
      homeSharp,
      mailOutline,
      triangle,
      ellipse,
      square,
      mailSharp,
      search,
      paperPlaneOutline,
      paperPlaneSharp,
      heartOutline,
      heartSharp,
      contract,
      cart,
      cog,
      cogOutline,
      cogSharp,
      cartOutline,
      contractOutline,
      archiveOutline,
      archiveSharp,
      trashOutline,
      trashSharp,
      warningOutline,
      warningSharp,
      bookmarkOutline,
      bookmarkSharp
    });
  }
}
