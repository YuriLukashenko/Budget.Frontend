import { Component, OnInit } from '@angular/core';
import {FluxService} from "../services/api/flux/flux.service";
import {IChartData, IFluxMonthProfit, IUserDTO} from "../dtos/DTOs";
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-flux-month',
  templateUrl: './flux-month.component.html',
  styleUrls: ['./flux-month.component.css']
})
export class FluxMonthComponent implements OnInit {
  context = [] as IFluxMonthProfit[];
  chartData = [] as IChartData[];
  constructor(private fluxService: FluxService) { }

  ngOnInit(): void {
    this.convertToChartData();
  }

  getContext(){
    this.fluxService.getFluxesMonthProfits().subscribe(
      data => {
        this.context = data;
      },
      err => {
        this.context = JSON.parse(err.error).message;
      }
    );
  }

  convertToChartData(){
    this.fluxService.getFluxesMonthProfits()
      .pipe(
        map((data: IFluxMonthProfit[]) => data.map(x => ({ date: x.date, value: x.monthSum}) as IChartData)
        ))
      .subscribe((data) => {
        this.chartData = data;
      });
  }
}
