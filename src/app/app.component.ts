import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage/token-storage.service';
import {MenuService} from "./services/menu/menu.service";
import {IMenuItem} from "./dtos/DTOs";

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

  constructor(private tokenStorageService: TokenStorageService, private menuService: MenuService) { }

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
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
