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
  menuItems: IMenuItem[] | undefined;

  constructor(private tokenStorageService: TokenStorageService, private menuService: MenuService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
    }

    this.menuItems = this.menuService.getSalaryMenuItems();
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
