import { Component, OnInit } from '@angular/core';
import {FluxService} from "../../services/api/flux/flux.service";
import {FormControl} from "@angular/forms";
import {MatDatepicker} from "@angular/material/datepicker";
import {IChartData} from "../../dtos/DTOs";

@Component({
  selector: 'app-flux-index-months',
  templateUrl: './flux-index-months.component.html',
  styleUrls: ['./flux-index-months.component.css']
})
export class FluxIndexMonthsComponent implements OnInit {
  date: Date = new Date();
  possibleDates: IChartData[] = [];
  context: any;
  constructor(private fluxService: FluxService) { }

  ngOnInit(): void {
    this.setContext(this.date);
  }

  onChange(dateString: any) {
    let date = new Date(dateString);
    this.setIndexMonthProfits(date);
  }

  setIndexMonthProfits(date: Date){
    this.fluxService.getIndexMonthProfits(date).subscribe(
      data => {
        this.context = {
          data,
          settings:{
            seriesType: 'line',
            IsTruncateLabel: true,
            numberAxisFormat: "#%",
            numberTooltipFormat: "#.00%",
            HasThreshold: true
          }
        }
        console.log(data);
      },
      err => {
        this.context = JSON.parse(err).message;
      }
    );
  }

  setPossibleDates(){
    this.fluxService.getMonthProfits().subscribe(
      data => {
        this.possibleDates = data
      }
    )
  }

  setContext(date: Date){
    this.setIndexMonthProfits(date);
    this.setPossibleDates();
  }
}
