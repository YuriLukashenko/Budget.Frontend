import {Component, Inject, Input, NgZone, PLATFORM_ID, SimpleChange, SimpleChanges} from '@angular/core';
import { isPlatformBrowser, DatePipe } from '@angular/common';

import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import {IChartData} from "../dtos/DTOs";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  @Input() data: IChartData[] | undefined;

  private root: any = am5.Root;

  // @ts-ignore
  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone, public datepipe: DatePipe) {
  }

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.createChart();
  }

  createChart(){
    if(!this.root.container){
      this.root = am5.Root.new("chartdiv");
      this.root.setThemes([am5themes_Animated.new(this.root)]);
    }

    let chart = this.root.container.children.push(
      am5xy.XYChart.new(this.root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: this.root.verticalLayout,
        cursor: am5xy.XYCursor.new(this.root, {})
      })
    );

    let dataMap = this.data?.map(x => (
      {
        date: new Date(x.date).getTime(),
        dateT: new Date(x.date),
        sum: x.value
      }
    )) ?? [];

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(this.root, {
        renderer: am5xy.AxisRendererY.new(this.root, {})
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(this.root, {
        baseInterval: { timeUnit: "month", count: 1 },
        renderer: am5xy.AxisRendererX.new(this.root, {}),
      })
    );
    xAxis.data.setAll(dataMap);

    // Create series
    function createSeries(root:any, name:any, field:any) {
      let series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: field,
          valueXField: "date",
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "right",
            labelText: "{dateT}: {valueY}"
          })
        })
      );
      series.strokes.template.setAll({
        strokeWidth: 3
      });
      series.data.setAll(dataMap);
    }

    createSeries(this.root, "Flux by month 2021", "sum");
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }
}
