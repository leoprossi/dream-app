import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlarmService, Alarm } from '../../shared/services/alarms-service';

@Component({
  selector: 'alarms',
  templateUrl: 'alarms.html'
})
export class AlarmsPage {
  alarms: Alarm[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alarmService: AlarmService) {
    this.alarms = alarmService.getAlarms();
    console.log(this.alarms);
  }



}
