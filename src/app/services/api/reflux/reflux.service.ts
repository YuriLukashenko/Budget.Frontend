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
  IRefluxTypeDTO,
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

  getMonthSpends(): Observable<any>{
    return this.get('month/spend/2022')
      .pipe(
        map((data: IFluxMonthSpend[]) =>
          data.map(x => ({date: x.date, value: x.monthSum}) as IChartData)
        )
      );
  }

  getMonthSpendsByType(typeId: number): Observable<any>{
    return this.get('month/spend/2022/' + typeId.toString())
      .pipe(
        map((data: IFluxMonthSpend[]) =>
          data.map(x => ({date: x.date, value: x.monthSum}) as IChartData)
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
