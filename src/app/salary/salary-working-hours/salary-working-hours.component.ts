import {Component, Input, OnInit} from '@angular/core';
import {IChartData, IColumnChartData} from "../../dtos/DTOs";
import {SalaryService} from "../../services/api/salary/salary.service";

@Component({
  selector: 'app-salary-working-hours',
  templateUrl: './salary-working-hours.component.html',
  styleUrls: ['./salary-working-hours.component.css']
})
export class SalaryWorkingHoursComponent implements OnInit {
  @Input() ref: string | undefined;
  context: any;
  constructor(private salaryService: SalaryService) { }

  ngOnInit(): void {
    this.setContext();
  }

  setContext(){
    this.salaryService.getSalaryWorkingHours().subscribe(
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
