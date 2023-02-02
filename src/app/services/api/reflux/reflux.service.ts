import { Injectable } from '@angular/core';
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {
  IChartData,
  IFluxDTO,
  IFluxMonthSpend,
  IReflux,
  IRefluxDTO,
  IRefluxTypeDTO, IRefluxYearSpend,
  RefluxType
} from "../../../dtos/DTOs";

const serviceRoute = 'reflux/';
@Injectable({
  providedIn: 'root'
})

export class RefluxService {

  constructor(private api: ApiService) { }

  get(resource: string): Observable<any> {
    return this.api.get(serviceRoute + resource);
  }

  post(resource: string, body: any): Observable<any> {
    return this.api.post(serviceRoute + resource, body);
  }

  getMonthSpends(year: number): Observable<any>{
    return this.get('month/spend/' + year.toString())
      .pipe(
        map((data: IFluxMonthSpend[]) =>
          data.map(x => ({date: x.date, value: x.monthSum}) as IChartData)
        )
      );
  }

  getMonthSpendsByType(year:number, typeId: number): Observable<any>{
    return this.get('month/spend/' + year.toString() + '/'  + typeId.toString())
      .pipe(
        map((data: IFluxMonthSpend[]) =>
          data.map(x => ({date: x.date, value: x.monthSum}) as IChartData)
        )
      );
  }

  getMonthSpendsTotal(): Observable<any>{
    return this.get('month/spend/')
      .pipe(
        map((data: IFluxMonthSpend[]) =>
          data.map(x => ({date: x.date, value: x.monthSum}) as IChartData)
        )
      );
  }

  getMonthSpendsTotalByType(typeId: number): Observable<any>{
    return this.get('month/spend/type/'  + typeId.toString())
      .pipe(
        map((data: IFluxMonthSpend[]) =>
          data.map(x => ({date: x.date, value: x.monthSum}) as IChartData)
        )
      );
  }

  getYearSpends(): Observable<any>{
    return this.get('year/spend/')
      .pipe(
        map((data: IRefluxYearSpend[]) =>
          data.map(x => ({date: x.date, value: x.yearSum}) as IChartData)
        )
      );
  }

  getYearSpendsByType(type: number): Observable<any>{
    return this.get('year/spend/type/' + type.toString())
      .pipe(
        map((data: IRefluxYearSpend[]) =>
          data.map(x => ({date: x.date, value: x.yearSum}) as IChartData)
        )
      );
  }

  getRefluxTypes(): Observable<any>{
    return this.get('types/2022')
      .pipe(
        map((data: IRefluxTypeDTO[]) =>
        data.map(x => ({id: x.rtId, name: x.name}) as RefluxType)
        )
      );
  }

  getLastRefluxes(count: number): Observable<any>{
    return this.get('last/' + count)
      .pipe(
        map((data: IReflux[]) => data as IReflux[])
      );
  }

  add(body: IRefluxDTO): Observable<any> {
    return this.post('add', body)
      .pipe(
        map((data: any) => data)
      );
  }
}
