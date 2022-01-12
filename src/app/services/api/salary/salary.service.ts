import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../api.service";
import {map} from "rxjs/operators";
import {IAverageRate, IChartData, IFluxMonthProfit} from "../../../dtos/DTOs";

const serviceRoute = 'salary/';
@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(private api: ApiService) { }

  get(resource: string): Observable<any> {
    return this.api.get(serviceRoute + resource);
  }

  getSalaryAverageRates(): Observable<any> {
    return this.get('rates/avg')
      .pipe(
        map((data: IAverageRate[]) =>
          data.map(x => ({date: x.date, value: x.avgRate}) as IChartData)
        )
      );
  }
}
