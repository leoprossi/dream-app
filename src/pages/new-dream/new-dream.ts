import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Dream, DreamService } from '../../shared/services/dream-service';

@Component({
  selector: 'page-new-dream',
  templateUrl: 'new-dream.html',
})
export class NewDreamPage {
  dream: Dream;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dreamService: DreamService) {
  }

  save() {
    this.dreamService.addDream(this.dream);
  }

}
