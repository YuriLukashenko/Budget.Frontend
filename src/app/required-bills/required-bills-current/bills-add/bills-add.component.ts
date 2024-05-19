import { Component, OnInit } from '@angular/core';
import {IFluxDTO, IReqBillsCategory, IReqBillsPayedDTO} from "../../../dtos/DTOs";
import {RequiredBillsService} from "../../../services/api/required-bills/required-bills.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-bills-add',
  templateUrl: './bills-add.component.html',
  styleUrls: ['./bills-add.component.css']
})
export class BillsAddComponent implements OnInit {
  categories: IReqBillsCategory[] = [];
  form: FormGroup;
  dataStatus: string = 'ACTIVE' //| 'PENDING' | 'FAILURE';
  constructor(private requiredBillsService: RequiredBillsService  ) {
    this.form = new FormGroup({
      "category": new FormControl(""),
      "value": new FormControl()
    });
  }

  ngOnInit(): void {
    this.init();
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
}
