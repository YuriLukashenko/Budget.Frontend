import { Component, OnInit } from '@angular/core';
import {IReqBillsCategory} from "../../../dtos/DTOs";
import {DateService} from "../../../services/date/date.service";
import {FormControl, FormGroup} from "@angular/forms";
import {RefreshService} from "../../../services/refresh/refresh.service";

@Component({
  selector: 'app-bills-date-selector',
  templateUrl: './bills-date-selector.component.html',
  styleUrls: ['./bills-date-selector.component.css']
})
export class BillsDateSelectorComponent implements OnInit {
  years: number[] = [];
  months: number[] = [];
  form: FormGroup;
  dataStatus: string = 'ACTIVE' //| 'PENDING' | 'FAILURE';
  constructor(private dateService: DateService, private refreshService: RefreshService) {
    this.form = new FormGroup({
      "year": new FormControl(dateService.getCurrentYear()),
      "month": new FormControl(dateService.getCurrentMonth())
    });
  }

  ngOnInit(): void {
    this.years = this.dateService.getYears();
    this.months = this.dateService.getMonths();
  }

  onSubmit() {
    this.dateService.setSelectedYear(this.form.value.year);
    this.dateService.setSelectedMonth(this.form.value.month);

    this.refresh();
  }

  refresh() {
    this.refreshService.triggerRefresh();
  }

  backToday() {
    this.form.patchValue({ year: this.dateService.getCurrentYear() });
    this.dateService.setSelectedYear(this.form.value.year);

    this.form.patchValue({ month: this.dateService.getCurrentMonth() });
    this.dateService.setSelectedMonth(this.form.value.month);
  }
}
