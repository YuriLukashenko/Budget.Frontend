import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { DatePipe } from "@angular/common";
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from "./app-routing.module";
import { UsersComponent } from './users/users.component';
import { FluxMonthComponent } from './flux/flux-month/flux-month.component';
import { SalaryAvgRateComponent } from './salary/salary-avg-rate/salary-avg-rate.component';
import { SalaryBonusesByTypesComponent } from './salary/salary-bonuses-by-types/salary-bonuses-by-types.component';
import { SalaryBonusesByMonthsComponent } from './salary/salary-bonuses-by-months/salary-bonuses-by-months.component';
import { SalaryBonusesContainerComponent } from './salary/salary-bonuses-container/salary-bonuses-container.component';
import { SalaryWorkingHoursComponent } from './salary/salary-working-hours/salary-working-hours.component';
import { SalaryTotalByMonthsComponent } from './salary/salary-total-by-months/salary-total-by-months.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FluxYearsComponent } from './flux/flux-years/flux-years.component';
import { FluxDeltaMonthsComponent } from './flux/flux-delta-months/flux-delta-months.component';
import { SalaryDeltaMonthsComponent } from './salary/salary-delta-months/salary-delta-months.component';
import { FluxQuartersComponent } from './flux/flux-quarters/flux-quarters.component';
import { FluxDeltaQuartersComponent } from './flux/flux-delta-quarters/flux-delta-quarters.component';
import { RefluxMonthComponent } from './reflux/reflux-month/reflux-month.component';
import { CurrentCashComponent } from './current-cash/current-cash/current-cash.component';
import { FluxAddComponent } from './flux/flux-add/flux-add.component';
import { FluxIndexMonthsComponent } from './flux/flux-index-months/flux-index-months.component';
import { TableComponent } from './components/table/table.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { RefluxAddComponent } from './reflux/reflux-add/reflux-add.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TotalValuesComponent } from './total-values/total-values.component';
import { TotalValuesHeaderComponent } from './total-values/total-values-header/total-values-header.component';
import { TotalValuesPieComponent } from './total-values/total-values-pie/total-values-pie.component';
import { TotalValuesStatisticComponent } from './total-values/total-values-statistic/total-values-statistic.component';
import { PieComponent } from './pie/pie.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RateComponent } from './rate/rate.component';
import { RefluxLastComponent } from './reflux/reflux-last/reflux-last.component';
import { RequiredBillsCurrentComponent } from './required-bills/required-bills-current/required-bills-current.component';
import { BillsStatusComponent } from './required-bills/required-bills-current/bills-status/bills-status.component';
import { BillsAddComponent } from './required-bills/required-bills-current/bills-add/bills-add.component';
import { BillCurrentComponent } from './required-bills/required-bills-current/bills-status/bill-current/bill-current.component';
import { BillsDateSelectorComponent } from './required-bills/required-bills-current/bills-date-selector/bills-date-selector.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ColumnChartComponent,
    LoginComponent,
    UsersComponent,
    FluxMonthComponent,
    SalaryAvgRateComponent,
    SalaryBonusesByTypesComponent,
    SalaryBonusesByMonthsComponent,
    SalaryBonusesContainerComponent,
    SalaryWorkingHoursComponent,
    SalaryTotalByMonthsComponent,
    DropdownComponent,
    FluxYearsComponent,
    FluxDeltaMonthsComponent,
    SalaryDeltaMonthsComponent,
    FluxQuartersComponent,
    FluxDeltaQuartersComponent,
    RefluxMonthComponent,
    CurrentCashComponent,
    FluxAddComponent,
    FluxIndexMonthsComponent,
    TableComponent,
    SandboxComponent,
    RefluxAddComponent,
    TotalValuesComponent,
    TotalValuesHeaderComponent,
    TotalValuesPieComponent,
    TotalValuesStatisticComponent,
    PieComponent,
    RateComponent,
    RefluxLastComponent,
    RequiredBillsCurrentComponent,
    BillsStatusComponent,
    BillsAddComponent,
    BillCurrentComponent,
    BillsDateSelectorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxSpinnerModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
