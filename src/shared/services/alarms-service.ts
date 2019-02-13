import { Injectable } from "@angular/core";

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

export class WeekDay {
    day: string;
    code: string;
}