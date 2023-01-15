import { Injectable } from '@angular/core';
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
const serviceRoute = 'rate/';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(private api: ApiService) { }

  get(resource: string): Observable<any> {
    return this.api.get(serviceRoute + resource);
  }

  post(resource: string, body: any): Observable<any> {
    return this.api.post(serviceRoute + resource, body);
  }

  getAll(): Observable<any>{
    return this.get('all')
      .pipe(
        map((data: number) => data)
      );
  }

  getByName(name: string): Observable<any> {
    return this.get(`by/${name}`)
      .pipe(
        map((data: number) => data)
      );
  }

  getLast(): Observable<any> {
    return this.get('last')
      .pipe(
        map((data: any) => data)
      );
  }

  add(body: any):  Observable<any> {
    return this.post('add', body)
      .pipe(
        map((data: any) => data)
      );
  }
}
