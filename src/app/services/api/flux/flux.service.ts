import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TokenStorageService} from "../../token-storage/token-storage.service";

const API_URL = 'https://localhost:5001/api/flux/';
@Injectable({
  providedIn: 'root'
})
export class FluxService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  getFluxesMonthProfits(): Observable<any> {
    return this.http.get(API_URL + 'month/profit',
      { responseType: 'json', headers: { authorization: this.tokenStorage.getToken()}
      });
  }
}
