import { Component, OnInit } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Create root and chart
    let root = am5.Root.new("chartdiv");
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout
      })
    );

    let data =[
      {
        "rtId": 25,
        "typeName": "Ашан",
        "sum": 7,
        "sum2019": 0,
        "sum2020": 0,
        "sum2021": 7
      },
      {
        "rtId": 44,
        "typeName": "Монетки",
        "sum": 109,
        "sum2019": 55,
        "sum2020": 16,
        "sum2021": 38
      }
    ]
    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 30,
          strokeOpacity: 1,
        }),
        categoryField: "typeName"
      })
    );
    xAxis.data.setAll(data);


    // Create series
    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "2019",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "sum2019",
        categoryXField: "typeName",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "right",
          labelText: "{categoryX}: {valueY}"
        })
      })
    );

    // Create series
    let series2 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "2020",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "sum2020",
        categoryXField: "typeName",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "right",
          labelText: "{categoryX}: {valueY}"
        })
      })
    );

    // Create series
    let series3 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "2021",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "sum2021",
        categoryXField: "typeName",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "right",
          labelText: "{categoryX}: {valueY}"
        })
      })
    );

    series1.data.setAll(data);
    series2.data.setAll(data);
    series3.data.setAll(data);

    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {
    }));
    legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}));
  }
}








