import { Component, OnInit } from '@angular/core';
import {IReqBillsCurrentDTO, IReqBillsPayedDTO} from "../../../dtos/DTOs";
import {RequiredBillsService} from "../../../services/api/required-bills/required-bills.service";
import {RefreshService} from "../../../services/refresh/refresh.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-bills-status',
  templateUrl: './bills-status.component.html',
  styleUrls: ['./bills-status.component.css']
})
export class BillsStatusComponent implements OnInit {
  currentBills: IReqBillsCurrentDTO[] = [];
  private refreshSubscription: Subscription | undefined;

  constructor(private requiredBillsService: RequiredBillsService, private refreshService: RefreshService) { }

  ngOnInit(): void {
    this.init();
    this.refreshSubscription = this.refreshService.refresh$.subscribe(() => {
      this.refreshComponent();
    });
  }

  ngOnDestroy() {
    if(this.refreshSubscription){
      this.refreshSubscription.unsubscribe();
    }
  }

  refreshComponent() {
    this.init();
    console.log('Component refreshed');
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
