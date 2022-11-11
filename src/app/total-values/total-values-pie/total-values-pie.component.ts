import { Component, OnInit } from '@angular/core';
import {TotalValuesService} from "../../services/api/total-values/total-values.service";

@Component({
  selector: 'app-total-values-pie',
  templateUrl: './total-values-pie.component.html',
  styleUrls: ['./total-values-pie.component.css']
})
export class TotalValuesPieComponent implements OnInit {
  context: any;
  constructor(private totalValuesService: TotalValuesService) { }

  ngOnInit(): void {
    this.setContext();
  }

  setContext(){
    this.totalValuesService.getPercents().subscribe(
      data => {
         this.context = {
           data,
           settings: {
             isLegend: false,
             categoryField: "currencyType",
             valueField: "percent"
           }
         }
      },
      err => {
        console.log(err.error.message);
      }
    );
  }
}
