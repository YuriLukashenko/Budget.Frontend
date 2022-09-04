import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Tabulator} from 'tabulator-tables';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges  {
  @Input() tableData: any[] = [];
  @Input() columnNames: any[] = [];
  @Input() height: string = '100vh';
  tab = document.createElement('div');
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.drawTable();
  }

  private drawTable(): void {
    new Tabulator(this.tab, {
      data: this.tableData,
      reactiveData:true, //enable data reactivity
      autoColumns:true,
      layout: 'fitData',
      height: this.height
    });
    document.getElementById('my-tabular-table')?.appendChild(this.tab);
  }
}
