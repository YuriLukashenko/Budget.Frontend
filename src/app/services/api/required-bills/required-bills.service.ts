import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../api.service";
import {map} from "rxjs/operators";
import {
  IFluxDTO,
  IFluxTypes,
  IReqBillsCategory,
  IReqBillsCurrentDTO,
  IReqBillsPayedDTO,
  IReqBillsSelectedDTO
} from "../../../dtos/DTOs";

const serviceRoute = 'requiredbills/';
@Injectable({
  providedIn: 'root'
})
export class RequiredBillsService {

  constructor(private api: ApiService) { }

  get(resource: string): Observable<any> {
    return this.api.get(serviceRoute + resource);
  }

  post(resource: string, body: any): Observable<any> {
    return this.api.post(serviceRoute + resource, body);
  }

  getCategories(): Observable<any>{
    return this.get('categories')
      .pipe(
        map((data: IReqBillsCategory[]) => data)
      );
  }

  getCurrentBills(type: number): Observable<any>{
    return this.get('current/' + type.toString())
      .pipe(
        map((data: IReqBillsCurrentDTO[]) => data)
      );
  }

  getSelectedBills(body: IReqBillsSelectedDTO): Observable<any> {
    return this.post('selected', body)
      .pipe(
        map((data: IReqBillsCurrentDTO[]) => data)
      );
  }

  getSelectedBillsTotal(body: IReqBillsSelectedDTO): Observable<any> {
    return this.post('total', body)
      .pipe(
        map((data: IReqBillsCurrentDTO) => data)
      );
  }

  getCurrentBillsTotal(type: number): Observable<any>{
    return this.get('total/' + type.toString())
      .pipe(
        map((data: IReqBillsCurrentDTO) => data)
      );
  }

  add(body: IReqBillsPayedDTO): Observable<any> {
    return this.post('add', body)
      .pipe(
        map((data: any) => data)
      );
  }
}
