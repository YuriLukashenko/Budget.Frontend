import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage/token-storage.service';
import {MenuService} from "./services/menu/menu.service";
import {IMenuItem} from "./dtos/DTOs";
import {CurrentCashService} from "./services/api/current-cash/current-cash.service";
import {TotalValuesService} from "./services/api/total-values/total-values.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  username: string = "";
  salaryItems: IMenuItem[] | undefined;
  fluxItems: IMenuItem[] | undefined;
  refluxItems: IMenuItem[] | undefined;
  currentCashItems: IMenuItem[] | undefined;
  totalValuesItems: IMenuItem[] | undefined;
  currentCashDisplayValue: string = "";
  totalValuesDisplayValue: string = "";

  constructor(private tokenStorageService: TokenStorageService,
              private menuService: MenuService,
              private currentCashService: CurrentCashService,
              private totalValuesService: TotalValuesService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
    }

    this.salaryItems = this.menuService.getSalaryMenuItems();
    this.fluxItems = this.menuService.getFluxMenuItems();
    this.refluxItems = this.menuService.getRefluxMenuItems();
    this.currentCashItems = this.menuService.getCurrentCashMenuItems();
    this.totalValuesItems = this.menuService.getTotalValuesItems();

    this.currentCashService.getAll().subscribe(
      data => {this.currentCashDisplayValue = Math.floor(data).toString();},
      err =>  {this.currentCashDisplayValue = "N/A"; }
    );

    this.totalValuesService.getAll().subscribe(
      data => {this.totalValuesDisplayValue = Math.floor(data).toString();},
      err =>  {this.totalValuesDisplayValue = "N/A"; }
    );
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
