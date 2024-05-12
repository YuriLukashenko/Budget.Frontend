import { Component, OnInit } from '@angular/core';

interface Item {
  category: string;
  requiredBill: string;
  actualBill: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-bills-status',
  templateUrl: './bills-status.component.html',
  styleUrls: ['./bills-status.component.css']
})
export class BillsStatusComponent implements OnInit {

  items: Item[] = [
    { category: 'Category 1', requiredBill: '$100', actualBill: '$120', isCompleted: true },
    { category: 'Category 2', requiredBill: '$2003', actualBill: '$180', isCompleted: false },
    { category: 'Category 3', requiredBill: '$150', actualBill: '$1050', isCompleted: true }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
