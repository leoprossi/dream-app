import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { CrudService } from "./crud-service";

const STORAGE_KEY = 'userDreams';

@Injectable()
export class DreamService implements CrudService<Dream> {

    constructor(public storage: Storage) {
    }

    async create(dream: Dream): Promise<any> {
        return this.getAll()
            .then(res => {
                if (res) {
                    res.push(dream);
                    return this.storage.set(STORAGE_KEY, res);
                } else {
                    return this.storage.set(STORAGE_KEY, [dream]);
                }
            });
    }

    async getAll(): Promise<any> {
        return this.storage.get(STORAGE_KEY);
    }

    async update(dream: Dream): Promise<any> {
        return this.getAll();
    }

    async delete(dream: Dream): Promise<any> {
        return this.getAll();
    }
}


export class Dream {
    id: number;
    date: string;
    content: string;
    feeling: string;
}