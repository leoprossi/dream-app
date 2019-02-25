import { Component } from '@angular/core';
import { ViewController, AlertController } from 'ionic-angular';

@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {
  delete: boolean = false;
  constructor(public viewCtrl: ViewController, public alertCtrl: AlertController) {
  }

  deleteEvent() {
    this.presentConfirm();
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
            this.setDelete();
            this.viewCtrl.dismiss(this.delete);
          },
          cssClass: "danger"
        }
      ]
    });
    alert.present();
  }

  setDelete() {
    this.delete = true;
  }
}
