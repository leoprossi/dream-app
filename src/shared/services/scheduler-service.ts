import { Injectable } from "@angular/core";
import { Platform, AlertController } from "ionic-angular";

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Alarm } from "./alarms-service";

@Injectable()
export class SchedulerService {
    
    constructor(public platform: Platform, public alertCtrl: AlertController, public localNotifications: LocalNotifications) {
    }

    async schedule(alarm: Alarm) {
        console.log(alarm);
        let notifications = [];
        alarm.days
            .filter(day => day.checked)
            .forEach(day => {
                let notificationDate = new Date();
                notificationDate.setHours(notificationDate.getHours() + (24 * this.daysBetween(day)));
                notificationDate.setHours(alarm.time.hours);
                notificationDate.setMinutes(alarm.time.minutes);

                let toSchedule = {
                    id: day.cod,
                    title: 'DreamAlarm',
                    text: 'Time to wake up!',
                    at: notificationDate,
                    every: 'week'
                };
                notifications.push(toSchedule);
            });
        if (this.platform.is('cordova')) {
            await this.localNotifications.schedule(notifications);
        }
        this.alertCtrl.create({
            title: 'Alarm set!',
            buttons: ['OK']
        }).present();
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