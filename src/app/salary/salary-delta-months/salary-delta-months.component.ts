import { Component, OnInit } from '@angular/core';
import {FluxService} from "../../services/api/flux/flux.service";
import {SalaryService} from "../../services/api/salary/salary.service";

@Component({
  selector: 'app-salary-delta-months',
  templateUrl: './salary-delta-months.component.html',
  styleUrls: ['./salary-delta-months.component.css']
})
export class SalaryDeltaMonthsComponent implements OnInit {
  context: any;
  constructor(private salaryService: SalaryService) { }

  ngOnInit(): void {
    this.setContext();
  }

  setContext(){
    this.salaryService.getSalaryDeltaByMonths().subscribe(
      data => {
        this.context = {
          data,
          settings: {
            IsTruncateLabel: true,
            numberAxisFormat: "#%",
            numberTooltipFormat: "#.00%",
          }
        }
      },
      err => {
        this.context = JSON.parse(err).message;
      }
    );
  }
}
