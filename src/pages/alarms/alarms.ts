import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlarmService, Alarm } from '../../shared/services/alarms-service';
import { NewAlarmPage } from '../new-alarm/new-alarm';

@Component({
  selector: 'alarms',
  templateUrl: 'alarms.html'
})
export class AlarmsPage {
  alarms: Alarm[];
  isActive: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alarmService: AlarmService) {
    this.alarms = alarmService.getAlarms();
  }

  newAlarm() {
      this.navCtrl.push(NewAlarmPage);
  }

  shortNames(alarm: Alarm): string {
    let shortNames = "";
    alarm.days.forEach(d => {
      if (d && d.hasOwnProperty("shortName")) {
        shortNames += d.shortName;
        shortNames += "  ";
      }
    });
    return shortNames;
  }

}
