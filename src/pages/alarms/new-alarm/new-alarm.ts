import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlarmService, Alarm } from '../../../shared/services/alarms-service';
import { AlarmsPage } from '../alarm-list/alarm-list';

@IonicPage()
@Component({
  selector: 'page-new-alarm',
  templateUrl: 'new-alarm.html',
})
export class NewAlarmPage {

  emptyAlarm = new Alarm();
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alarmService: AlarmService) {
  }

  newAlarm(alarm) {
    if (alarm.time && alarm.days.filter(d => d.checked).length > 0) {
      this.alarmService.create(alarm)
        .then(res => this.navCtrl.popTo(AlarmsPage));
    }
  }

}
