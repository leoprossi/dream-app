import { Injectable } from "@angular/core";

@Injectable()
export class AlarmService {
    alarms: Alarm[] = [];

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