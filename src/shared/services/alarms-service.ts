import { Injectable } from "@angular/core";
import { WeekDay, Time } from "@angular/common";
import { DateTime } from "ionic-angular";

@Injectable()
export class AlarmService {
    alarms: Alarm[] = [];

    constructor() {
        this.alarms = [{
            days: ['mon', 'tue'],
            time: new Date().getTime(),
            enabled: true
        }];
    }

    newAlarm(alarm: Alarm) {
        this.alarms.push(alarm);
    }

    getAlarms(): Alarm[] {
        return this.alarms;
    }
}

export class Alarm {
    days: any[];
    time: any;
    enabled: boolean = true;
}