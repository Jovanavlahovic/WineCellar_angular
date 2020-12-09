export class Wine{
    _id: number;
    name: string;
    year: number;
    grapes: string;
    country: string;
    region: string;
    description: string;
    picture: string;

    constructor(obj?:any){
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || '';
        this.year = obj && obj.year || null;
        this.grapes = obj && obj.grapes || '';
        this.country = obj && obj.country || '';
        this.region = obj && obj.region || '';
        this.description = obj && obj.description || '';
        this.picture = obj && obj.picture || '';
    }
}