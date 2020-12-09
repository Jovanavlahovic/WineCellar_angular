import { Wine } from './wine.model';

export class WineList{
    count: number;
    results: Wine[];

    constructor(obj?:any){
        this.count = obj && obj.count || null;
        this.results = obj && obj.results.map(x => new Wine(x)) || [];
    }
}