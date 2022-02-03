import { Component, OnInit } from '@angular/core';
import {FluxService} from "../../services/api/flux/flux.service";
import {IChartData, IFluxMonthProfit} from "../../dtos/DTOs";

@Component({
  selector: 'app-flux-month',
  templateUrl: './flux-month.component.html',
  styleUrls: ['./flux-month.component.css']
})
export class FluxMonthComponent implements OnInit {
  context: any;
  constructor(private fluxService: FluxService) { }

  ngOnInit(): void {
    this.setContext();
  }

  setContext(){
    this.fluxService.getMonthProfits().subscribe(
      data => {
        this.context = {
          data
        };
      },
        err => {
        this.context = JSON.parse(err.error).message;
      }
    );
  }
}
