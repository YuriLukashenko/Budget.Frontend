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
    return this.slices.find(x => x.name == name) ?? {} as ITotalValuesSlice;
  }

  show(sliceName: string, prop: string){
    let slice = this.findSlice(sliceName);
    if(prop == "value") { return slice.value ?? ""; }
    if(prop == "percent") { return slice.percent ?? ""; }
    return "";
  }

  setContext(){
    this.totalValuesService.getSlices().subscribe(
      data => {
        this.slices = data;
      },
      err => {
        console.log(err.error.message);
      }
    );
  }
}
