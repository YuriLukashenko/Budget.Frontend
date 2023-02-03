import {Component, Input, OnInit} from '@angular/core';
import {IChartData, IMenuItem} from "../../dtos/DTOs";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() name: string = "";
  @Input() icon: string = "";
  @Input() items: IMenuItem[]| undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
