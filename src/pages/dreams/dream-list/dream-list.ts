import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../dream-details/dream-details';
import { Dream, DreamService } from '../../../shared/services/dream-service';
import { NewDreamPage } from '../new-dream/new-dream';

@Component({
  selector: 'page-list',
  templateUrl: 'dream-list.html'
})
export class ListPage implements OnInit {
  items: Array<Dream>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dreamService:DreamService) {
  }

  ngOnInit() {
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
