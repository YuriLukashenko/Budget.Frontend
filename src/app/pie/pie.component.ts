import {Component, Input, OnInit} from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import theme from "@amcharts/amcharts5/themes/Kelly";

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  @Input() context: any;
  constructor() { }

  ngOnInit(): void {
    let root = am5.Root.new("chartdiv");
    root.setThemes([
      am5themes_Animated.new(root),
      theme.new(root),
    ]);
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {})
    );
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: "Series",
        categoryField: this.context.settings.categoryField,
        valueField: this.context.settings.valueField
      })
    );
    let dataMap = this.context?.data ?? [];
    series.data.setAll(dataMap);

    if(this.context.settings.isLegend){
      let legend = chart.children.push(am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        layout: root.horizontalLayout
      }));
      legend.data.setAll(series.dataItems);
    }
  }

}
