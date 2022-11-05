import { Injectable } from '@angular/core';
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
const serviceRoute = 'totalvalues/';
@Injectable({
  providedIn: 'root'
})
export class TotalValuesService {

  constructor(private api: ApiService) { }

  get(resource: string): Observable<any> {
    return this.api.get(serviceRoute + resource);
  }

  getAll(): Observable<any>{
    return this.get('all')
      .pipe(
        map((data: number) => data)
      );
  }

  getPercents() {
    return [{
      currencyType: "uah",
      percent: 66.40
    },{
      currencyType: "usd",
      percent: 13.40
    },{
      currencyType: "eur",
      percent: 2.71
    },{
      currencyType: "pln",
      percent: 4.09
    },{
      currencyType: "fop",
      percent: 13.40
    }]
  };
}
