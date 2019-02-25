import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { AlarmService, Alarm } from '../../../shared/services/alarms-service';
import { PopoverComponent } from '../../../shared/components/popover/popover';

@IonicPage()
@Component({
  selector: 'page-edit-alarm',
  templateUrl: 'edit-alarm.html',
})
export class EditAlarmPage {
  alarm: Alarm;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alarmService: AlarmService,
              public popover: PopoverController) {
    this.alarm = this.navParams.get('alarm');
  }

  presentPopover(event) {
    let pop = this.popover.create(PopoverComponent);
    pop.present({
      ev: event
    });
    pop.onDidDismiss((result) => {
      if (result) {
        this.alarmService.delete(this.alarm);
        this.navCtrl.pop();
      }
    });
  }

  editAlarm(event) {
    console.log(event);
    // this.alarmService.update(event);
  }
}
