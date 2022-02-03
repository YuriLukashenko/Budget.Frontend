import { Component, OnInit } from '@angular/core';
import {IChartData, IColumnChartData} from "../../dtos/DTOs";
import {FluxService} from "../../services/api/flux/flux.service";

@Component({
  selector: 'app-flux-years',
  templateUrl: './flux-years.component.html',
  styleUrls: ['./flux-years.component.css']
})
export class FluxYearsComponent implements OnInit {
  context: any;
  constructor(private fluxService: FluxService) { }

  ngOnInit(): void {
    this.setContext();
  }

  setContext(){
    this.fluxService.getYearsProfits().subscribe(
      data => {
        this.context = {
          data,
          settings: {
            min: 0
          }
        }
      },
      err => {
        this.context = JSON.parse(err.error).message;
      }
    );
  }
}
