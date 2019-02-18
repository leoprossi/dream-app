import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'userAlarms';
const STORAGE_SEQ = 'alarmSeq';

@Injectable()
export class AlarmService {

    constructor(public storage: Storage) {
    }

    getSeq() {
        return this.storage.get(STORAGE_SEQ);
    }

    async newAlarm(alarm: Alarm) {
        this.getSeq().then(res => {
            if (res) {
                alarm.id = res;
                this.storage.set(STORAGE_SEQ, ++res);
            } else {
                alarm.id = 1;
                this.storage.set(STORAGE_SEQ, 2);
            }
        });
        console.log(alarm);
        return this.getAlarms()
            .then(result => {
                if (result) {
                    result.push(alarm);
                    this.storage.set(STORAGE_KEY, result);
                } else {
                    this.storage.set(STORAGE_KEY, [alarm]);
                }
                console.log(alarm);
            })
    }

    async getAlarms(): Promise<any> {
        return this.storage.get(STORAGE_KEY);
    }

    async toggle(id: number) {
        this.getAlarms().then(res => {
            res.forEach(element => {
                if (element.id === id) {
                    element.enabled = !element.enabled;
                }
            });
            console.log(res);
            return this.storage.set(STORAGE_KEY, res);
        })
    }
}

export class Alarm {
    id: number;
    days: any[];
    time: any;
    enabled: boolean;
}