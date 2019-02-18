import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { Dream, DreamService } from '../../shared/services/dream-service';
import { NewDreamPage } from '../new-dream/new-dream';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items: Array<Dream>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dreamService:DreamService) {
    dreamService.getDreams()
      .then(res => this.items = res);
  }

  itemTapped(item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  newItem() {
    this.navCtrl.push(NewDreamPage);
  }
}
