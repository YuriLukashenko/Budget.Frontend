import { Component, OnInit } from '@angular/core';
import {IColumnChartData} from "../../dtos/DTOs";
import {FluxService} from "../../services/api/flux/flux.service";

@Component({
  selector: 'app-flux-delta-months',
  templateUrl: './flux-delta-months.component.html',
  styleUrls: ['./flux-delta-months.component.css']
})
export class FluxDeltaMonthsComponent implements OnInit {
  chartData = [] as IColumnChartData[];
  context: any;
  constructor(private fluxService: FluxService) { }

  ngOnInit(): void {
    this.setContext();
  }

  setContext(){
    this.fluxService.getDeltaMonthProfits().subscribe(
      data => {
        this.context = {
          data,
          settings: {
            IsTruncateLabel: true,
            numberAxisFormat: "#%",
            numberTooltipFormat: "#.00%",
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
