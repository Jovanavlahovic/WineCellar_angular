import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Wine } from '../model/wine.model';
import { WineList } from '../model/wineList.model';

const baseUrl = 'http://localhost:3000/api/wines';

@Injectable({
  providedIn: 'root',
})
export class WineService {
  constructor(private http: HttpClient) {}

  getWines(par): Observable<WineList> {
    let queryParams ={};

    if(queryParams){
      queryParams = { params: new HttpParams()
      .set('sort', par.sort || '')
      .set('filter', par.filter && JSON.stringify(par.filter) || '')
      .set('pageSize', par.pageSize || '')
      .set('page', par.page || 1)

    }}

    return this.http.get(baseUrl, queryParams).pipe(map((x) => new WineList(x)));
  }

  delete(id:number):Observable<Wine> {
    return this.http.delete(`${baseUrl}/${id}`).pipe(map(x => new Wine(x)))
  }

  getWine(id): Observable<Wine>{
    return this.http.get(`${baseUrl}/${id}`).pipe(map(
      x => new Wine(x)
    ))
  }

  updateWine(wine: Wine): Observable<Wine>{
    return this.http.put(`${baseUrl}/${wine._id}`, wine).pipe(map (x => new Wine(x)))
  }

  addWine(wine: Wine): Observable<Wine>{
    return this.http.post(baseUrl, wine).pipe(map(x => new Wine(x)));
  }
}
