import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenStorageService} from "../token-storage/token-storage.service";

const API_URL = 'https://localhost:5001/api/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  getUsers(): Observable<any> {
    return this.http.get(API_URL,
      { responseType: 'json', headers: { authorization: this.tokenStorage.getToken()}});
  }
}
