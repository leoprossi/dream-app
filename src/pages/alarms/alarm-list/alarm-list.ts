import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { AlarmService, Alarm } from '../../../shared/services/alarms-service';
import { NewAlarmPage } from '../new-alarm/new-alarm';
import { EditAlarmPage } from '../edit-alarm/edit-alarm';

@IonicPage()
@Component({
  selector: 'alarms',
  templateUrl: 'alarm-list.html'
})
export class AlarmsPage {
  alarms: Alarm[];
  isActive: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alarmService: AlarmService) {
  }

  ionViewWillEnter() {
    this.alarmService.getAll()
      .then(res => this.alarms = res);
  }

  newAlarm() {
    this.navCtrl.push(NewAlarmPage);
  }

  shortNames(alarm: Alarm): string {
    let shortNames = "";
    alarm.days
        .filter(day => day.checked)
        .forEach(d => {
        if (d && d.hasOwnProperty("shortName")) {
        shortNames += d.shortName;
        shortNames += " ";
        }
    });
    return shortNames;
}

  toggle(id: number) {
    this.alarmService.toggle(id);
  }

  editAlarm(alarm: Alarm) {
    this.navCtrl.push(EditAlarmPage, { alarm: alarm });
  }

}
