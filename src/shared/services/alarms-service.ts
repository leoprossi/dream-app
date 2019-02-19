import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { CrudService } from "./crud-service";

const STORAGE_KEY = 'userAlarms';
const STORAGE_SEQ = 'alarmSeq';

@Injectable()
export class AlarmService implements CrudService<Alarm> {

    constructor(public storage: Storage) {
    }

    private getSeq() {
        return this.storage.get(STORAGE_SEQ);
    }

    async create(alarm: Alarm): Promise<any> {
        this.getSeq().then(res => {
            if (res) {
                alarm.id = res;
                this.storage.set(STORAGE_SEQ, ++res);
            } else {
                alarm.id = 1;
                this.storage.set(STORAGE_SEQ, 2);
            }
        });
        return this.getAll()
            .then(result => {
                if (result) {
                    result.push(alarm);
                    this.storage.set(STORAGE_KEY, result);
                } else {
                    this.storage.set(STORAGE_KEY, [alarm]);
                }
            })
    }

    async getAll(): Promise<any> {
        return this.storage.get(STORAGE_KEY);
    }

    async toggle(id: number) {
        this.getAll().then(res => {
            res.forEach(element => {
                if (element.id === id) {
                    element.enabled = !element.enabled;
                }
            });
            return this.storage.set(STORAGE_KEY, res);
        })
    }

    async update(alarm: Alarm): Promise<any> {
        this.getAll().then(res => {
            res.forEach(el => {
                if (el.id === alarm.id) {
                    el = alarm;
                }
            });
            return this.storage.set(STORAGE_KEY, res);
        })
    }

    async delete(alarm: Alarm): Promise<any> {
        return this.getAll().then(res => {
            res.filter(el => el.id != alarm.id);
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