import { Injectable } from '@angular/core';
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {IChartData, IFluxMonthSpend, IRefluxTypeDTO, RefluxType} from "../../../dtos/DTOs";

const serviceRoute = 'reflux/';
@Injectable({
  providedIn: 'root'
})

export class RefluxService {

  constructor(private api: ApiService) { }

  get(resource: string): Observable<any> {
    return this.api.get(serviceRoute + resource);
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
}
