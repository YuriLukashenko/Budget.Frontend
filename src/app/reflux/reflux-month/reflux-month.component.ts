import { Component, OnInit } from '@angular/core';
import {FluxService} from "../../services/api/flux/flux.service";
import {RefluxService} from "../../services/api/reflux/reflux.service";
import {RefluxType} from "../../dtos/DTOs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-reflux-month',
  templateUrl: './reflux-month.component.html',
  styleUrls: ['./reflux-month.component.css']
})
export class RefluxMonthComponent implements OnInit {
  context: any;
  refluxTypes: RefluxType[] = [];
  constructor(private refluxService: RefluxService) { }

  ngOnInit(): void {
    this.setContext();
  }

  setContext(){
    this.setMonthSpends();
    this.setTypes();
  }

  setMonthSpends(){
    this.refluxService.getMonthSpends().subscribe(
      data => {
        this.context = {
          data,
          settings: {
            seriesType: 'column'
          }
        };
      },
      err => {
        this.context = JSON.parse(err.error).message;
      }
    );
  }

  setMonthSpendsByType(typeId: number){
    this.refluxService.getMonthSpendsByType(typeId).subscribe(
      data => {
        this.context = {
          data,
          settings: {
            seriesType: 'column'
          }
        };
      },
      err => {
        this.context = JSON.parse(err.error).message;
      }
    );
  }


  setTypes(){
    this.refluxService.getRefluxTypes().subscribe(
      data => {
        this.refluxTypes = data?.map((x:any) => (
          {
            id: x.id,
            name: x.name
          }
        )) ?? [];

      },
      err => { this.refluxService = JSON.parse(err.error).message}
    );
  }


  onSelectChange(e: any){
    let typeId = e.target.value;
    this.setMonthSpendsByType(typeId);
  }
}
