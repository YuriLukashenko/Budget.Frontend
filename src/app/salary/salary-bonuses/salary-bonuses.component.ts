import { Component, OnInit } from '@angular/core';
import {SalaryService} from "../../services/api/salary/salary.service";
import {IColumnChartData} from "../../dtos/DTOs";

@Component({
  selector: 'app-salary-bonuses',
  templateUrl: './salary-bonuses.component.html',
  styleUrls: ['./salary-bonuses.component.css']
})
export class SalaryBonusesComponent implements OnInit {
  chartData = [] as IColumnChartData[];
  constructor(private salaryService: SalaryService) { }

  ngOnInit(): void {
    this.setContext();
  }

  setContext(){
    this.salaryService.getSalaryBonusesByTypes().subscribe(
      data => {
        this.chartData = data;
      },
      err => {
        this.chartData = JSON.parse(err.error).message;
      }
    );
  }
}
