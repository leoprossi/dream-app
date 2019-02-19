import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Dream, DreamService } from '../../../shared/services/dream-service';

@Component({
  selector: 'page-new-dream',
  templateUrl: 'new-dream.html',
})
export class NewDreamPage {
  dreamContent: string;
  dreamFeeling: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public dreamService: DreamService) {
  }

  save() {
    let dream = new Dream();
    dream.content = this.dreamContent;
    dream.feeling = this.dreamFeeling;
    this.dreamService.create(dream);

    this.navCtrl.popToRoot();
  }

}
