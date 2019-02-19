import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlarmService, Alarm } from '../../shared/services/alarms-service';

@IonicPage()
@Component({
  selector: 'page-edit-alarm',
  templateUrl: 'edit-alarm.html',
})
export class EditAlarmPage {
  alarm: Alarm;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alarmService: AlarmService) {
    this.alarm = this.navParams.get('alarm');
  }
}
