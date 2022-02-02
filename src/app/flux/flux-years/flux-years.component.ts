import { Component, OnInit } from '@angular/core';
import {IChartData, IColumnChartData} from "../../dtos/DTOs";
import {FluxService} from "../../services/api/flux/flux.service";

@Component({
  selector: 'app-flux-years',
  templateUrl: './flux-years.component.html',
  styleUrls: ['./flux-years.component.css']
})
export class FluxYearsComponent implements OnInit {
  chartData = [] as IColumnChartData[];
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
        this.chartData = data;
      },
      err => {
        this.chartData = JSON.parse(err.error).message;
      }
    );
  }
}
