import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DatePipe } from '@angular/common';

import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  private root: any = am5.Root;

  // @ts-ignore
  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone, public datepipe: DatePipe) {}

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      let root = am5.Root.new("chartdiv");

      root.setThemes([am5themes_Animated.new(root)]);

      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: false,
          panY: false,
          wheelX: "panX",
          wheelY: "zoomX",
          layout: root.verticalLayout,
          cursor: am5xy.XYCursor.new(root, {})
        })
      );

      let data = [
        {
          "date": "2019-01-18T00:00:00",
          "monthSum": 10208
        },
        {
          "date": "2019-02-15T00:00:00",
          "monthSum": 12409
        },
        {
          "date": "2019-03-10T00:00:00",
          "monthSum": 14750
        },
      ]

      let dataMap = data.map(x => (
        {
          date: new Date(x.date).getTime(),
          dateT: new Date(x.date),
          sum: x.monthSum
        }
        ));


      // Create Y-axis
      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {})
        })
      );

      // Create X-Axis
      let xAxis = chart.xAxes.push(
        am5xy.DateAxis.new(root, {
          baseInterval: { timeUnit: "month", count: 1 },
          renderer: am5xy.AxisRendererX.new(root, {}),
        })
      );
      xAxis.data.setAll(dataMap);

      // Create series
      function createSeries(name:any, field:any) {
        var series = chart.series.push(
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

      createSeries("Flux by month 2021", "sum");

      this.root = root;
    });
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
