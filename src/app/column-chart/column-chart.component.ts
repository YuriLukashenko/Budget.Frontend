import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent {
  private root: any = am5.Root;
  @Input() context: any;
  @Input() ref: string | undefined;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.createChart();
  }

  createChart() {
    if(!this.root.container){
      this.ref ??= 'chartdiv';
      this.root = am5.Root.new(this.ref);
      this.root.setThemes([am5themes_Animated.new(this.root)]);
    }
    Array.from(this.root.container.children).forEach((chart:any)=>{
      chart.series.clear();
      chart.xAxes.clear();
      chart.yAxes.clear();
    });
    let chart = this.root.container.children.push(
      am5xy.XYChart.new(this.root, {
        panY: false,
        layout: this.root.verticalLayout
      })
    );

    let dataMap = this.context?.data ?? [];

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(this.root, {
        min: this.context?.settings?.min ?? undefined,
        numberFormat: this.context?.settings?.numberAxisFormat ?? '#,###',
        renderer: am5xy.AxisRendererY.new(this.root, {
        })
      })
    );

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(this.root, {
        renderer: am5xy.AxisRendererX.new(this.root, {
          minGridDistance: 30,
        }),
        categoryField: "category"
      })
    );

    if(this.context?.settings?.IsTruncateLabel) {
      let xRenderer = xAxis.get("renderer");
      xRenderer.labels.template.setAll({
        oversizedBehavior: "truncate",
        maxWidth: 60
      })
    }

    xAxis.data.setAll(dataMap);
    let series;
    if(this.context?.settings?.seriesType === 'column' || this.context?.settings?.seriesType === undefined) {
      series = chart.series.push(
        am5xy.ColumnSeries.new(this.root, {
          name: "",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value",
          categoryXField: "category",
          tooltip: am5.Tooltip.new(this.root, {
            pointerOrientation: "right",
            labelText: this.context?.settings?.numberTooltipFormat
              ? "{categoryX}: {valueY.formatNumber('"+ this.context?.settings?.numberTooltipFormat +"')}"
              : "{categoryX}: {valueY}"
          })
        })
      );
      series.data.setAll(dataMap);
    } else if(this.context?.settings?.seriesType === 'line'){
      series = chart.series.push(
        am5xy.LineSeries.new(this.root, {
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value",
          categoryXField: "category",
          tooltip: am5.Tooltip.new(this.root, {
            pointerOrientation: "right",
            labelText: this.context?.settings?.numberTooltipFormat
              ? "{categoryX}: {valueY.formatNumber('"+ this.context?.settings?.numberTooltipFormat +"')}"
              : "{categoryX}: {valueY}"
          })
        })
      );
      series.strokes.template.setAll({
        strokeWidth: 4
      });
      series.data.setAll(dataMap);
    }

    let legend = chart.children.push(am5.Legend.new(this.root, {}));
    legend.data.setAll(chart.series.values);

    chart.set("cursor", am5xy.XYCursor.new(this.root, {}));

    if(this.context?.settings?.HasThreshold){
      let rangeDataItem = yAxis.makeDataItem({value: 1, endValue: 1.01});
      let range = series.createAxisRange(rangeDataItem);
      range.strokes.template.setAll({
        stroke: am5.color(0xff0000),
        strokeWidth: 5
      });

      range.fills.template.setAll({
        fill: am5.color(0x00ff00),
        fillOpacity: 0.8,
        visible: true
      });

      rangeDataItem.get("axisFill").setAll({
        fill: am5.color(0x00ff00),
        fillOpacity: 0.7,
        visible: true
      });
    }
  }
}








