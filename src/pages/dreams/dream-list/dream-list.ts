import { Component } from '@angular/core';

import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { ItemDetailsPage } from '../dream-details/dream-details';
import { Dream, DreamService } from '../../../shared/services/dream-service';
import { NewDreamPage } from '../new-dream/new-dream';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'dream-list.html'
})
export class ListPage {
  items: Array<Dream>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dreamService:DreamService) {
  }

  ionViewWillEnter() {
    this.dreamService.getAll()
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
