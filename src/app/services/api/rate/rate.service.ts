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
}
