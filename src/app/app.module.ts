import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { DatePipe } from "@angular/common";
import { ColumnChartComponent } from './column-chart/column-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ColumnChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
