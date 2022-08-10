import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../api.service";
import {map} from "rxjs/operators";
import {
  IChartData,
  IColumnChartData,
  IDeltaResponse, IFluxDTO,
  IFluxMonthProfit,
  IFluxQuarterProfit, IFluxTypes,
  IFluxYearProfit
} from "../../../dtos/DTOs";

const serviceRoute = 'flux/';
@Injectable({
  providedIn: 'root'
})
export class FluxService {

  constructor(private api: ApiService) { }

  get(resource: string): Observable<any> {
    return this.api.get(serviceRoute + resource);
  }

  post(resource: string, body: any): Observable<any> {
    return this.api.post(serviceRoute + resource, body);
  }

  getFluxTypes(): Observable<any>{
    return this.get('types')
      .pipe(
        map((data: IFluxTypes[]) => data)
      );
  }

  getMonthProfits(): Observable<any>{
    return this.get('month/profit')
      .pipe(
        map((data: IFluxMonthProfit[]) =>
          data.map(x => ({date: x.date, value: x.monthSum}) as IChartData)
        )
      );
  }

  getQuarterProfits(): Observable<any>{
    return this.get('quarter/profit')
      .pipe(
        map((data: IFluxQuarterProfit[]) =>
          data.map(x => ({date: x.date, value: x.quarterSum}) as IChartData)
        )
      );
  }

  getYearsProfits(): Observable<any>{
    return this.get('year/profit')
      .pipe(
        map((data: IFluxYearProfit[]) =>
          data.map(x => ({category: new Date(x.date).getFullYear().toString(), value: x.yearSum}) as IColumnChartData)
        )
      );
  }

  getDeltaMonthProfits(): Observable<any> {
    return this.get('delta/months')
      .pipe(
      map((data: IDeltaResponse[]) =>
        data.map(x => ({category: x.displayPeriod, value: x.value}) as IColumnChartData)
      )
    );
  }

  getDeltaQuarterProfits(): Observable<any> {
    return this.get('delta/quarter')
      .pipe(
        map((data: IDeltaResponse[]) =>
          data.map(x => ({category: x.displayPeriod, value: x.value}) as IColumnChartData)
        )
      );
  }

  addFlux(body: IFluxDTO): Observable<any> {
    return this.post('add', body)
      .pipe(
        map((data: any) => data)
      );
  }
}
