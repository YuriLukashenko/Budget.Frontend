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
      {routerLink: "salary/delta/months", displayName: "Salary delta by months"},
    ]
    return items;
  }

  getFluxMenuItems() : IMenuItem[] {
    let items: IMenuItem[] = [
      {routerLink: "flux/month", displayName: "Flux month"},
      {routerLink: "flux/quarters", displayName: "Flux quarters"},
      {routerLink: "flux/years", displayName: "Flux years"},
      {routerLink: "flux/delta/months", displayName: "Flux delta months"},
      {routerLink: "flux/delta/quarters", displayName: "Flux delta quarters"},
    ]
    return items;
  }

  getRefluxMenuItems(): IMenuItem[] {
    let items: IMenuItem[] = [
      {routerLink: "reflux/month", displayName: "Reflux month"}
    ]
    return items;
  }

  getCurrentCashMenuItems(): IMenuItem[] {
    let items: IMenuItem[] = [
      {routerLink: "currentCash", displayName: "Show cash"}
    ]
    return items;
  }
}
