import { Component, OnInit } from '@angular/core';
import {FluxService} from "../services/api/flux/flux.service";
import {IChartData, IFluxMonthProfit} from "../dtos/DTOs";

@Component({
  selector: 'app-flux-month',
  templateUrl: './flux-month.component.html',
  styleUrls: ['./flux-month.component.css']
})
export class FluxMonthComponent implements OnInit {
  chartData = [] as IChartData[];
  constructor(private fluxService: FluxService) { }

  ngOnInit(): void {
    this.setContext();
  }

  setContext(){
    this.fluxService.getMonthProfits().subscribe(
      data => {
        this.chartData = data;
      },
        err => {
        this.chartData = JSON.parse(err.error).message;
      }
    );
  }
}
