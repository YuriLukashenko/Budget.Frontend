import { Injectable } from '@angular/core';
import {IMenuItem} from "../../dtos/DTOs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getSalaryMenuItems() : IMenuItem[]{
    let items: IMenuItem[] = [
      {routerLink: "salary/avg", displayName: "Salary average rate"},
      {routerLink: "salary/bonuses", displayName: "Salary bonuses"},
      {routerLink: "salary/working-hours", displayName: "Salary working hours"},
      {routerLink: "salary/enrollment/total", displayName: "Salary total"},
    ]
    return items;
  }

  getFluxMenuItems() : IMenuItem[] {
    let items: IMenuItem[] = [
      {routerLink: "flux/month", displayName: "Flux month"},
      {routerLink: "flux/years", displayName: "Flux years"},
      {routerLink: "flux/delta/months", displayName: "Flux delta months"},
    ]
    return items;
  }
}
