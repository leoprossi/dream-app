import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'userDreams';

@Injectable()
export class DreamService {

    constructor(public storage: Storage) {
    }

    addDream(dream: Dream) {
        return this.getDreams()
            .then(res => {
                if (res) {
                    res.push(dream);
                    return this.storage.set(STORAGE_KEY, res);
                } else {
                    return this.storage.set(STORAGE_KEY, [dream]);
                }
            });
    }

    getDreams(): Promise<Dream[]> {
        return this.storage.get(STORAGE_KEY);
    }
}


export class Dream {
    id: number;
    date: string;
    content: string;
    feeling: string;
}