import {Component, Input, OnInit} from '@angular/core';
import {SalaryService} from "../../services/api/salary/salary.service";
import {IColumnChartData} from "../../dtos/DTOs";

@Component({
  selector: 'app-salary-bonuses-by-types',
  templateUrl: './salary-bonuses-by-types.component.html',
  styleUrls: ['./salary-bonuses-by-types.component.css']
})
export class SalaryBonusesByTypesComponent implements OnInit {
  @Input() ref: string | undefined;
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
