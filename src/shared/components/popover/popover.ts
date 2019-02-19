import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  text: string;

  constructor(public viewCtrl: ViewController) {
    console.log('Hello PopoverComponent Component');
  }

  delete() {
    this.viewCtrl.dismiss();
  }

}
