import {Component, Input, OnInit} from '@angular/core';
import {IChartData} from "../../dtos/DTOs";
import {SalaryService} from "../../services/api/salary/salary.service";

@Component({
  selector: 'app-salary-total-by-months',
  templateUrl: './salary-total-by-months.component.html',
  styleUrls: ['./salary-total-by-months.component.css']
})
export class SalaryTotalByMonthsComponent implements OnInit {
  @Input() ref: string | undefined;
  chartData = [] as IChartData[];
  constructor(private salaryService: SalaryService) { }

  ngOnInit(): void {
    this.setContext();
  }

  setContext(){
    this.salaryService.getSalaryTotalByMonths().subscribe(
      data => {
        this.chartData = data;
      },
      err => {
        this.chartData = JSON.parse(err.error).message;
      }
    );
  }

}
