import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user/user.service";
import {IUserDTO} from "../dtos/DTOs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  context = [] as IUserDTO[];
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getContext();
  }

  getContext(){
    this.userService.getUsers().subscribe(
      data => {
        this.context = data;
      },
      err => {
        this.context = JSON.parse(err.error).message;
      }
    );
  }
}
