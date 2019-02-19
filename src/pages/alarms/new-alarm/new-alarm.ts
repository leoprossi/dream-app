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
  days = [{
    name: 'Sunday', 
    shortName: 'sun',
    checked: false
  }, {
    name: 'Monday',
    shortName: 'mon',
    checked: false
  }, {
    name: 'Tuesday', 
    shortName: 'tue',
    checked: false
  }, {
    name: 'Wednesday', 
    shortName: 'wed',
    checked: false
  }, {
    name: 'Thursday', 
    shortName: 'thu',
    checked: false
  }, {
    name: 'Friday',
    shortName: 'fri',
    checked: false
  }, {
    name: 'Saturday',
    shortName: 'sat',
    checked: false
  }];

  choosenTime;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alarmService: AlarmService) {
  }

  newAlarm() {
    if (this.choosenTime) {
      let alarm = new Alarm();
      alarm.days = this.days;
      alarm.time = this.choosenTime;
      alarm.enabled = true;

      this.alarmService.newAlarm(alarm)
        .then(res => this.navCtrl.popTo(AlarmsPage));
    }
  }

}
