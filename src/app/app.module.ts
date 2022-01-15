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
import { SalaryBonusesComponent } from './salary/salary-bonuses/salary-bonuses.component';
import { SalaryBonusesByMonthsComponent } from './salary/salary-bonuses-by-months/salary-bonuses-by-months.component';

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
    SalaryBonusesComponent,
    SalaryBonusesByMonthsComponent
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
