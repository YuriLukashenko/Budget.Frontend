import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { DatePipe } from "@angular/common";
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { UsersComponent } from './users/users.component';
import { FluxMonthComponent } from './flux-month/flux-month.component';
import { SalaryAvgRateComponent } from './salary/salary-avg-rate/salary-avg-rate.component';
import { SalaryBonusesByTypesComponent } from './salary/salary-bonuses-by-types/salary-bonuses-by-types.component';
import { SalaryBonusesByMonthsComponent } from './salary/salary-bonuses-by-months/salary-bonuses-by-months.component';
import { SalaryBonusesContainerComponent } from './salary/salary-bonuses-container/salary-bonuses-container.component';
import { SalaryWorkingHoursComponent } from './salary/salary-working-hours/salary-working-hours.component';
import { SalaryTotalByMonthsComponent } from './salary/salary-total-by-months/salary-total-by-months.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

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
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
