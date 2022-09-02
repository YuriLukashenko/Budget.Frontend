import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../api.service";
import {map} from "rxjs/operators";
import {
  IAverageRate,
  IChartData,
  IColumnChartData, IDeltaResponse,
  IFluxMonthProfit,
  ISalaryBonusesByMonths,
  ISalaryBonusesByType, ISalaryConvertingDTO, ISalaryTotalByMonths, ISalaryWorkingHours
} from "../../../dtos/DTOs";

const serviceRoute = 'salary/';
@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(private api: ApiService) { }

  get(resource: string): Observable<any> {
    return this.api.get(serviceRoute + resource);
  }

  post(resource: string, body: any): Observable<any> {
    return this.api.post(serviceRoute + resource, body);
  }

  getSalaryAverageRates(): Observable<any> {
    return this.get('rates/avg')
      .pipe(
        map((data: IAverageRate[]) =>
          data.map(x => ({date: x.date, value: x.avgRate}) as IChartData)
        )
      );
  }

  getSalaryBonusesByTypes(): Observable<any> {
    return this.get('bonuses/by/types')
      .pipe(
        map((data: ISalaryBonusesByType[]) =>
          data.map(x => ({category: x.name, value: x.sum}) as IColumnChartData)
        )
      );
  }

  getSalaryBonusesByMonths(): Observable<any> {
    return this.get('bonuses/by/months')
      .pipe(
        map((data: ISalaryBonusesByMonths[]) =>
          data.map(x => ({date: x.date, value: x.sum}) as IChartData)
        )
      );
  }

  getSalaryWorkingHours(): Observable<any> {
    return this.get('formation/hours')
      .pipe(
        map((data: ISalaryWorkingHours[]) =>
          data.map(x => ({date: x.date, value: x.sum}) as IChartData)
        )
      );
  }

  getSalaryTotalByMonths(): Observable<any> {
    return this.get('enrollment/total')
      .pipe(
        map((data: ISalaryTotalByMonths[]) =>
          data.map(x => ({date: x.date, value: x.sum}) as IChartData)
        )
      );
  }

  getSalaryDeltaByMonths(): Observable<any> {
    return this.get('delta/months')
      .pipe(
        map((data: IDeltaResponse[]) =>
          data.map(x => ({category: x.displayPeriod, value: x.value}) as IColumnChartData)
        )
      );
  }

  addSalaryConverting(body: ISalaryConvertingDTO): Observable<any> {
    return this.post('converting/add', body)
      .pipe(
        map((data: any) => data)
      );
  }
}
