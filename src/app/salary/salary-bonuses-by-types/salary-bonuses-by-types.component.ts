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
  context: any;
  constructor(private salaryService: SalaryService) { }

  ngOnInit(): void {
    this.setContext();
  }

  setContext(){
    this.salaryService.getSalaryBonusesByTypes().subscribe(
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
