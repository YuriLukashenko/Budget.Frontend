import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../api.service";
import {map} from "rxjs/operators";
import {IChartData, IFluxMonthProfit} from "../../../dtos/DTOs";

const serviceRoute = 'flux/';
@Injectable({
  providedIn: 'root'
})
export class FluxService {

  constructor(private api: ApiService) { }

  get(resource: string): Observable<any> {
    return this.api.get(serviceRoute + resource);
  }

  getMonthProfits(): Observable<any>{
    return this.get('month/profit')
      .pipe(
        map((data: IFluxMonthProfit[]) =>
          data.map(x => ({date: x.date, value: x.monthSum}) as IChartData)
        )
      );
  }
}
