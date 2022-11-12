import { Component, OnInit } from '@angular/core';
import {TotalValuesService} from "../../services/api/total-values/total-values.service";
import {IDetails, ITotalValuesDetails, ITotalValuesSlice} from "../../dtos/DTOs";

@Component({
  selector: 'app-total-values-statistic',
  templateUrl: './total-values-statistic.component.html',
  styleUrls: ['./total-values-statistic.component.css']
})
export class TotalValuesStatisticComponent implements OnInit {
  details: ITotalValuesDetails[] = [];
  constructor(private totalValuesService: TotalValuesService) { }

  ngOnInit(): void {
    this.setContext();
  }

  findDetails(currency: string): IDetails {
    return this.details.find(x => x.currency == currency)?.details ?? {} as IDetails;
  }

  show(currency: string, prop: string) {
    let details = this.findDetails(currency);
    if(prop == "fund") return details.fund ?? "";
    if(prop == "ewer") return details.ewer ?? "";
    if(prop == "total") return details.total ?? "";
    if(prop == "credit") return details.credit ?? "";
    if(prop == "balance") return details.balance ?? "";
    if(prop == "deposit") return details.deposit ?? "";
    if(prop == "obligation") return details.obligation ?? "";
    if(prop == "ewerCredit") return details.ewerCredit ?? "";
    if(prop == "currentCash") return details.currentCash ?? "";
    return "";
  }

  setContext(){
    this.totalValuesService.getDetails().subscribe(
      data => {
        console.log(data);
        this.details = data;
      },
      err => {
        console.log(err.error.message);
      }
    );
  }
}
