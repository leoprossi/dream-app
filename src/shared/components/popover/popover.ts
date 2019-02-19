import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  item: any;
  

  constructor(public viewCtrl: ViewController) {
  }

  delete() {
    this.viewCtrl.dismiss();
  }

}
