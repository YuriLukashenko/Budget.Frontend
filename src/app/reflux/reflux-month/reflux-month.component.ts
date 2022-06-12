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
    this.refluxService.getMonthSpends().subscribe(
      data => {
        this.context = {
          data
        };
      },
      err => {
        this.context = JSON.parse(err.error).message;
      }
    );
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
    console.log(e.target.value);
  }
}
