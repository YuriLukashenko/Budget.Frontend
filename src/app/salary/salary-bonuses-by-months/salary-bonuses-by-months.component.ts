import { Component, OnInit } from '@angular/core';
import {IChartData, IColumnChartData} from "../../dtos/DTOs";
import {SalaryService} from "../../services/api/salary/salary.service";

@Component({
  selector: 'app-salary-bonuses-by-months',
  templateUrl: './salary-bonuses-by-months.component.html',
  styleUrls: ['./salary-bonuses-by-months.component.css']
})
export class SalaryBonusesByMonthsComponent implements OnInit {
  chartData = [] as IChartData[];
  constructor(private salaryService: SalaryService) { }

  ngOnInit(): void {
    this.setContext();
  }

  setContext(){
    this.salaryService.getSalaryBonusesByMonths().subscribe(
      data => {
        this.chartData = data;
      },
      err => {
        this.chartData = JSON.parse(err.error).message;
      }
    );
  }
}
