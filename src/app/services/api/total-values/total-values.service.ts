import { Injectable } from '@angular/core';
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {IColumnChartData, IDeltaResponse, ITotalValuesPercent, ITotalValuesSlice} from "../../../dtos/DTOs";
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

  getPercents(): Observable<any> {
    return this.get('percents')
      .pipe(map((data: ITotalValuesPercent[]) => data));
  }

  getSlices(): Observable<any> {
    return this.get('slices')
      .pipe(map((data: ITotalValuesSlice[]) => data));
  }
}
