import { Component, OnInit } from '@angular/core';
import {IReqBillsCurrentDTO, IReqBillsPayedDTO} from "../../../dtos/DTOs";
import {RequiredBillsService} from "../../../services/api/required-bills/required-bills.service";

@Component({
  selector: 'app-bills-status',
  templateUrl: './bills-status.component.html',
  styleUrls: ['./bills-status.component.css']
})
export class BillsStatusComponent implements OnInit {
  currentBills: IReqBillsCurrentDTO[] = [];

  constructor(private requiredBillsService: RequiredBillsService) { }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.requiredBillsService.getCurrentBills().subscribe(
      data => {
        this.currentBills = data
      },
      err => {
        this.currentBills = JSON.parse(err.error).message;
      }
    );
  };
}
