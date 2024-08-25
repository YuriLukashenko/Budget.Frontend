import {Component, OnInit, SimpleChanges} from '@angular/core';
import {IReqBillsCurrentDTO, IReqBillsPayedDTO} from "../../../dtos/DTOs";
import {RequiredBillsService} from "../../../services/api/required-bills/required-bills.service";
import {RefreshService} from "../../../services/refresh/refresh.service";
import {Subscription} from "rxjs";
import {DateService} from "../../../services/date/date.service";
import {NgxSpinnerService} from "ngx-spinner";

enum BillType {
  External,
  Internal
}

@Component({
  selector: 'app-bills-status',
  templateUrl: './bills-status.component.html',
  styleUrls: ['./bills-status.component.css']
})
export class BillsStatusComponent implements OnInit {

  currentBillsExternal: IReqBillsCurrentDTO[] = [];
  currentBillsInternal: IReqBillsCurrentDTO[] = [];

  totalBillExternal: IReqBillsCurrentDTO = {} as IReqBillsCurrentDTO;
  totalBillInternal: IReqBillsCurrentDTO = {} as IReqBillsCurrentDTO;

  private refreshSubscription: Subscription | undefined;

  constructor(private requiredBillsService: RequiredBillsService,
              private refreshService: RefreshService,
              private dateService: DateService,
              private spinnerService: NgxSpinnerService) { }

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
    this.spinnerService.show();

    let year = this.dateService.getSelectedYear();
    let month = this.dateService.getSelectedMonth();

    this.requiredBillsService.getSelectedBills({
      type: BillType.External,
      year,
      month
    }).subscribe(
      data => {
        this.currentBillsExternal = data
      },
      err => {
        this.currentBillsExternal = JSON.parse(err.error).message;
      }
    );

    this.requiredBillsService.getSelectedBills({
      type: BillType.Internal,
      year,
      month
    }).subscribe(
      data => {
        this.currentBillsInternal = data
        this.spinnerService.hide();
      },
      err => {
        this.currentBillsInternal = JSON.parse(err.error).message;
      }
    );

    this.requiredBillsService.getSelectedBillsTotal({
      type: BillType.External,
      year,
      month
    }).subscribe(
      data => {
        this.totalBillExternal = data
      },
      err => {
        this.totalBillExternal  = JSON.parse(err.error).message;
      }
    );

    this.requiredBillsService.getSelectedBillsTotal({
      type: BillType.Internal,
      year,
      month
    }).subscribe(
      data => {
        this.totalBillInternal = data
      },
      err => {
        this.totalBillInternal  = JSON.parse(err.error).message;
      }
    );
  };
}
