import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import theme from "@amcharts/amcharts5/themes/Kelly";
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit{
  private root: any = am5.Root;
  @Input() context: any;
  @Input() ref: string | undefined;
  constructor(private spinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void { this.spinnerService.show(); }

  ngOnChanges(changes: SimpleChanges) {
    this.spinnerService.hide();
    this.createChart();
  }

  createChart(): void {
    if(!this.root.container){
      this.ref ??= 'chartdiv';
      this.root = am5.Root.new(this.ref);
      this.root.setThemes([
        am5themes_Animated.new(this.root),
        theme.new(this.root),
      ]);
    }
    let chart = this.root.container.children.push(
      am5percent.PieChart.new(this.root, {})
    );
    let series = chart.series.push(
      am5percent.PieSeries.new(this.root, {
        name: "Series",
        categoryField: this.context?.settings?.categoryField,
        valueField: this.context?.settings?.valueField
      })
    );
    let dataMap = this.context?.data ?? [];
    series.data.setAll(dataMap);

    if(this.context?.settings?.isLegend){
      let legend = chart.children.push(am5.Legend.new(this.root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        layout: this.root.horizontalLayout
      }));
      legend.data.setAll(series.dataItems);
    }
  }

}
