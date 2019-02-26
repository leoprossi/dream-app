import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlarmService, Alarm } from '../../../shared/services/alarms-service';
import { AlarmsPage } from '../alarm-list/alarm-list';
import { SchedulerService } from '../../../shared/services/scheduler-service';

@IonicPage()
@Component({
  selector: 'page-new-alarm',
  templateUrl: 'new-alarm.html',
})
export class NewAlarmPage {

  emptyAlarm = new Alarm();
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alarmService: AlarmService, public scheduler: SchedulerService) {
  }

  newAlarm(alarm) {
    if (alarm.time && alarm.days.filter(d => d.checked).length > 0) {
      this.alarmService.create(alarm)
        .then(res => {
          this.scheduler.schedule(alarm);
          this.navCtrl.popTo(AlarmsPage);
        });
    }
  }

}
