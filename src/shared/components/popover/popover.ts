import { Component, EventEmitter } from '@angular/core';
import { ViewController, AlertController, NavController } from 'ionic-angular';
import { CrudService } from '../../services/crud-service';
import { AlarmsPage } from '../../../pages/alarms/alarm-list/alarm-list';

@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent<T> {

  item: T;
  service: CrudService<T>

  constructor(public viewCtrl: ViewController, public alertCtrl: AlertController, public navCtrl: NavController) {
  }

  delete() {
    this.presentConfirm();
    this.viewCtrl.dismiss();
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Delete Warning',
      message: 'Do you really want to delete this alarm?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.service.delete(this.item).then(res => this.navCtrl.popTo(AlarmsPage));
          },
          cssClass: "danger"
        }
      ]
    });
    alert.present();
  }
}
