import {Component, Input, OnInit} from '@angular/core';
import {IReqBillsCurrentDTO} from "../../../../dtos/DTOs";

@Component({
  selector: 'app-bill-current',
  templateUrl: './bill-current.component.html',
  styleUrls: ['./bill-current.component.css']
})
export class BillCurrentComponent implements OnInit {
  @Input() currentBills: IReqBillsCurrentDTO[] = [];
  @Input() totalBill: IReqBillsCurrentDTO = {} as IReqBillsCurrentDTO;
  @Input() typeName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
