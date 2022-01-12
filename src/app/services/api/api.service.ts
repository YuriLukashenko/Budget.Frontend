import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenStorageService} from "../token-storage/token-storage.service";
import {Observable} from "rxjs";

const API_URL = 'https://localhost:5001/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  get(path: string): Observable<any> {
    return this.http.get(API_URL + path, {
      responseType: 'json',
      headers: { authorization: this.tokenStorage.getToken() }
    });
  }
}
