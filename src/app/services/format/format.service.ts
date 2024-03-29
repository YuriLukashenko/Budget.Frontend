import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatService {

  constructor() { }

  formatDate(date: any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  getPrimaryColor(){
    return 0x67B7DC;
  }
  getSecondaryColor(){
    return 0xCCFE3C;
  }
}
