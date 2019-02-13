import { Injectable } from "@angular/core";

@Injectable()
export class DreamService {
    dreamList: Dream[];

    addDream(dream: Dream) {
        dream.date = Date.now().toString();
        this.dreamList.push(dream);
    }

    getDreams(): Dream[] {
        return this.dreamList;
    }
}


export class Dream {
    id: number;
    date: string;
    content: string;
    feeling: string;
}