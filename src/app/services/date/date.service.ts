import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private selectedYear: number;
  private selectedMonth: number;

  constructor() {
    this.selectedYear = this.getCurrentYear();
    this.selectedMonth = this.getCurrentMonth();
  }

  getCurrentYear() {
    let date = new Date(Date.now());
    return date.getFullYear();
  }

  getCurrentMonth() {
    let date = new Date(Date.now());
    return date.getMonth() + 1;
  }

  getSelectedYear() { return this.selectedYear; }
  setSelectedYear(selectedYear: number) { this.selectedYear = selectedYear; }

  getSelectedMonth() { return this.selectedMonth; }
  setSelectedMonth(selectedMonth: number) { this.selectedMonth = selectedMonth; }

  isSelectedEqualToCurrent(){
    return this.getCurrentYear() == this.getSelectedYear()
        && this.getCurrentMonth() == this.getSelectedMonth()
  }

  getYears(): number[] {
    let years: number[] = [];
    let date = new Date(Date.now());
    for(let i = 2019; i<=date.getFullYear(); i++){
      years.push(i);
    }
    return years;
  }

  getMonths(): number[] {
    let months: number[] = [];
    for(let i = 1; i <= 12; i++){
      months.push(i);
    }
    return months;
  }
}
