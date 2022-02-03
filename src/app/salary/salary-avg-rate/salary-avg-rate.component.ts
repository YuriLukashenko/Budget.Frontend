import { Component, OnInit } from '@angular/core';
import {SalaryService} from "../../services/api/salary/salary.service";
import {IChartData} from "../../dtos/DTOs";

@Component({
  selector: 'app-salary-avg-rate',
  templateUrl: './salary-avg-rate.component.html',
  styleUrls: ['./salary-avg-rate.component.css']
})
export class SalaryAvgRateComponent implements OnInit {
  context: any;
  constructor(private salaryService: SalaryService) { }

  ngOnInit(): void {
    this.setContext();
  }

  setContext(){
    this.salaryService.getSalaryAverageRates().subscribe(
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
