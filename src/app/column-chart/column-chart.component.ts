import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import {IColumnChartData} from "../dtos/DTOs";

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent {
  private root: any = am5.Root;
  @Input() data: IColumnChartData[] | undefined;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.createChart();
  }

  createChart() {
    if(!this.root.container){
      this.root = am5.Root.new("chartdiv");
      this.root.setThemes([am5themes_Animated.new(this.root)]);
    }

    let chart = this.root.container.children.push(
      am5xy.XYChart.new(this.root, {
        panY: false,
        layout: this.root.verticalLayout
      })
    );

    let dataMap = this.data ?? [];

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(this.root, {
        renderer: am5xy.AxisRendererY.new(this.root, {})
      })
    );

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(this.root, {
        renderer: am5xy.AxisRendererX.new(this.root, {
          minGridDistance: 30,
          strokeOpacity: 1,
        }),
        categoryField: "category"
      })
    );
    xAxis.data.setAll(dataMap);

    let series = chart.series.push(
      am5xy.ColumnSeries.new(this.root, {
        name: "",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "category",
        tooltip: am5.Tooltip.new(this.root, {
          pointerOrientation: "right",
          labelText: "{categoryX}: {valueY}"
        })
      })
    );

    series.data.setAll(dataMap);

    let legend = chart.children.push(am5.Legend.new(this.root, {
    }));
    legend.data.setAll(chart.series.values);

    chart.set("cursor", am5xy.XYCursor.new(this.root, {}));
  }
}








