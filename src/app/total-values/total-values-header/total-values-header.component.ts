import { Component, OnInit } from '@angular/core';
import {TotalValuesService} from "../../services/api/total-values/total-values.service";
import {ITotalValuesSlice} from "../../dtos/DTOs";

@Component({
  selector: 'app-total-values-header',
  templateUrl: './total-values-header.component.html',
  styleUrls: ['./total-values-header.component.css']
})
export class TotalValuesHeaderComponent implements OnInit {
  slices: ITotalValuesSlice[] = [];
  constructor(private totalValuesService: TotalValuesService) { }

  ngOnInit(): void {
    this.setContext();
  }

  findSlice(name: string): ITotalValuesSlice {
    return this.slices.find(x => x.name == name) ??
      {name, value: NaN, percent: NaN} as ITotalValuesSlice;
  }

  show(sliceName: string, propName: string){
    let slice = this.findSlice(sliceName);
    if(propName == "value"){
      return isNaN(slice.value) ? "" : slice.value;
    }
    if(propName == "percent") {
      return isNaN(slice.percent) ? "" : slice.percent;
    }
    return "";
  }

  setContext(){
    this.totalValuesService.getSlices().subscribe(
      data => {
        console.log(data);
        this.slices = data;
      },
      err => {
        console.log(err.error.message);
      }
    );
  }
}
