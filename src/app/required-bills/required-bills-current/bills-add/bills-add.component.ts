import { Component, OnInit } from '@angular/core';
import { IReqBillsCategory, IReqBillsPayedDTO} from "../../../dtos/DTOs";
import { RequiredBillsService } from "../../../services/api/required-bills/required-bills.service";
import { FormControl, FormGroup } from "@angular/forms";
import { RefreshService } from "../../../services/refresh/refresh.service";
import {Subscription} from "rxjs";
import {DateService} from "../../../services/date/date.service";

@Component({
  selector: 'app-bills-add',
  templateUrl: './bills-add.component.html',
  styleUrls: ['./bills-add.component.css']
})
export class BillsAddComponent implements OnInit {
  categories: IReqBillsCategory[] = [];
  form: FormGroup;
  dataStatus: string = 'ACTIVE' //| 'PENDING' | 'FAILURE';
  private refreshSubscription: Subscription | undefined;
  constructor(private requiredBillsService: RequiredBillsService,
              private refreshService: RefreshService,
              private dateService: DateService) {
    this.form = new FormGroup({
      "category": new FormControl(""),
      "value": new FormControl()
    });
  }

  ngOnInit(): void {
    this.init();
    this.refreshSubscription = this.refreshService.refresh$.subscribe(() => {
      this.refreshComponent();
    });
  }

  refreshComponent() {
    let isEqual = this.dateService.isSelectedEqualToCurrent();
    if(isEqual){
      this.form.enable();
    } else{
      this.form.disable();
    }
  }

  init(){
    this.requiredBillsService.getCategories().subscribe(
      data => {
        this.categories = data
      },
      err => {
        this.categories = JSON.parse(err.error).message;
      }
    );
  };

  onSubmit(){
    this.dataStatus = 'PENDING';
    let addBody = this.map(this.form.value);
    this.requiredBillsService.add(addBody).subscribe(
      data => {this.dataStatus = 'ACTIVE'},
      err =>  {this.dataStatus = 'FAILURE'}
    );
    this.refresh();
  }

  map(formGroupValue: any): IReqBillsPayedDTO {
    const currentDate = new Date();
    const startOfMonthUTC = new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), 1));
    return {
      value: formGroupValue.value,
      categoryId: formGroupValue.category.id,
      date: startOfMonthUTC.toISOString(),
    };
  }

  refresh() {
    this.refreshService.triggerRefresh();
  }
}
