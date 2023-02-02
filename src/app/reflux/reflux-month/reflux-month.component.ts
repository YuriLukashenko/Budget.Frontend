import { Component, OnInit } from '@angular/core';
import {RefluxService} from "../../services/api/reflux/reflux.service";
import {RefluxType, Year} from "../../dtos/DTOs";

@Component({
  selector: 'app-reflux-month',
  templateUrl: './reflux-month.component.html',
  styleUrls: ['./reflux-month.component.css']
})
export class RefluxMonthComponent implements OnInit {
  context: any;
  refluxTypes: RefluxType[] = [];
  typeSelected: number = 0;
  years: Year[] = [];
  yearSelected: number = 2023;
  chartTypes: string[] = [];
  chartTypeSelected: string = "column";

  constructor(private refluxService: RefluxService) { }

  ngOnInit(): void {
    this.setContext();
  }

  setContext(){
    this.setMonthSpends(this.yearSelected);
    this.setYears();
    this.setTypes();
    this.setChartTypes();
  }

  setYears(){
    this.years = [
      { "id": 0,    "name": "Total by years"},
      { "id": -1,   "name": "Total by months"},
      { "id": 2019, "name": "2019" },
      { "id": 2020, "name": "2020" },
      { "id": 2021, "name": "2021" },
      { "id": 2022, "name": "2022" },
      { "id": 2023, "name": "2023" }
    ]
    this.yearSelected = 2023;
  }

  setChartTypes(){
    this.chartTypes = ["column", "line"]
    this.chartTypeSelected = "column";
  }

  setMonthSpends(year: number){
    this.refluxService.getMonthSpends(year).subscribe(
      data => {
        this.context = {
          data,
          settings: {
            seriesType: this.chartTypeSelected ?? 'column'
          }
        };
      },
      err => {
        this.context = JSON.parse(err.error).message;
      }
    );
  }

  setMonthSpendsByType(year: number, typeId: number){
    this.refluxService.getMonthSpendsByType(year, typeId).subscribe(
      data => {
        this.context = {
          data,
          settings: {
            seriesType: this.chartTypeSelected ?? 'column'
          }
        };
      },
      err => {
        this.context = JSON.parse(err.error).message;
      }
    );
  }

  setMonthSpendsTotal(){
    this.refluxService.getMonthSpendsTotal().subscribe(
      data => {
        this.context = {
          data,
          settings: {
            seriesType: this.chartTypeSelected ?? 'line'
          }
        };
      },
      err => {
        this.context = JSON.parse(err.error).message;
      }
    );
  }

  setMonthSpendsTotalByType(typeId: number){
    this.refluxService.getMonthSpendsTotalByType(typeId).subscribe(
      data => {
        this.context = {
          data,
          settings: {
            seriesType: this.chartTypeSelected ?? 'column'
          }
        };
      },
      err => {
        this.context = JSON.parse(err.error).message;
      }
    );
  }

  setYearSpends(){
    this.refluxService.getYearSpends().subscribe(
      data => {
        this.context = {
          data,
          settings: {
            seriesType: this.chartTypeSelected ?? 'column',
            bin: 'year'
          }
        };
      },
      err => {
        this.context = JSON.parse(err.error).message;
      }
    );
  }

  setYearSpendsByType(type: number){
    this.refluxService.getYearSpendsByType(type).subscribe(
      data => {
        this.context = {
          data,
          settings: {
            seriesType: this.chartTypeSelected ?? 'column',
            bin: 'year'
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
        this.refluxTypes.splice(0, 0, {
          id: 0,
          name: "Total"
        })
      },
      err => { this.refluxService = JSON.parse(err.error).message}
    );
  }


  onSelectChange(e: any){
    this.typeSelected = e.target.value;
    this.loadData();
  }

  onYearSelectChange(e: any){
    this.yearSelected = e.target.value;
    this.loadData();
  }

  onChartSelectChange(e: any){
    this.chartTypeSelected = e.target.value;
    this.loadData();
  }

  loadData(){
    if(this.typeSelected == 0 && this.yearSelected == 0) {
      this.setYearSpends();
      return;
    }
    if(this.typeSelected == 0 && this.yearSelected == -1){
      this.setMonthSpendsTotal();
      return;
    }
    if(this.yearSelected == 0){
      this.setYearSpendsByType(this.typeSelected);
      return;
    }
    if(this.yearSelected == -1){
      this.setMonthSpendsTotalByType(this.typeSelected);
      return;
    }
    if(this.typeSelected == 0){
      this.setMonthSpends(this.yearSelected);
      return;
    }
    this.setMonthSpendsByType(this.yearSelected, this.typeSelected);
    return;
  }
}
