import { Component, OnInit } from '@angular/core';
import {RefluxService} from "../../services/api/reflux/reflux.service";
import {IReflux} from "../../dtos/DTOs";

@Component({
  selector: 'app-reflux-last',
  templateUrl: './reflux-last.component.html',
  styleUrls: ['./reflux-last.component.css']
})
export class RefluxLastComponent implements OnInit {
  tableData: IReflux[] = [];
  count: number = 0;
  constructor(private refluxService: RefluxService) { }

  ngOnInit(): void {
    this.count = 25;
    this.init();
  }

  init(){
    this.refluxService.getLastRefluxes(this.count).subscribe(
      data => {
        this.tableData = data as IReflux[]
      },
      err => {
        this.tableData = JSON.parse(err.error).message;
      }
    );
  }
  onClick(){
    this.init();
  }
}
