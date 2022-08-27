import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { DatePipe } from "@angular/common";
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
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

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ColumnChartComponent,
    LoginComponent,
    HomeComponent,
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
