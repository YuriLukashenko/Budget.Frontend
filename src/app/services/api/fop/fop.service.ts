import { Injectable } from '@angular/core';
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {IFopDTO} from "../../../dtos/DTOs";
const serviceRoute = 'fop/';

@Injectable({
  providedIn: 'root'
})
export class FopService {
  constructor(private api: ApiService) { }

  get(resource: string): Observable<any> {
    return this.api.get(serviceRoute + resource);
  }

  post(resource: string, body: any): Observable<any> {
    return this.api.post(serviceRoute + resource, body);
  }

  getAll(): Observable<any>{
    return this.get('balance')
      .pipe(
        map((data: IFopDTO[]) => data)
      );
  }

  postAll(body: any):  Observable<any> {
    return this.post('update', body)
      .pipe(
        map((data: any) => data)
      );
  }
}
