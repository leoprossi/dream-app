import { Injectable } from "@angular/core";
import { Platform, AlertController } from "ionic-angular";

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Alarm } from "./alarms-service";

@Injectable()
export class SchedulerService {
    
    constructor(public platform: Platform, public alertCtrl: AlertController, public localNotifications: LocalNotifications) {
    }

    schedule(alarm: Alarm) {
        let notifications = [];
        alarm.days
            .filter(day => day.checked)
            .forEach(day => {
                let notificationDate = new Date();
                notificationDate.setHours(notificationDate.getHours() + (24 * this.daysBetween(day)));
                notificationDate.setHours(alarm.time.getHours());
                notificationDate.setMinutes(alarm.time.getMinutes());

                let toSchedule = {
                    id: day.cod,
                    title: 'DreamAlarm',
                    text: 'Time to wake up!',
                    at: notificationDate,
                    every: 'week'
                };

                notifications.push(toSchedule);
            })
    }

    daysBetween(day: any): number {
        let currentDay = new Date().getDay();
        let difference = day.cod - currentDay;
        if (difference < 0) {
            difference += 7;
        }
        return difference;
    }
}