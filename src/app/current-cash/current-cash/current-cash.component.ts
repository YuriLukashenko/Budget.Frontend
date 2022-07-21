import { Component, OnInit } from '@angular/core';
import {CurrentCashService} from "../../services/api/current-cash/current-cash.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-current-cash',
  templateUrl: './current-cash.component.html',
  styleUrls: ['./current-cash.component.css']
})
export class CurrentCashComponent implements OnInit {
  currentCashDisplayValue: string = "";
  realCashDisplayValue: string = "";
  cashLocationsForm: FormGroup;
  constructor(private currentCashService: CurrentCashService) {
    this.cashLocationsForm = new FormGroup({
      "privatUniversal": new FormControl(0),
      "privatPayout": new FormControl(0),
      "monoBlack": new FormControl(0),
      "monoWhite": new FormControl(0),
      "monoUsd": new FormControl(0),
      "monoSupport": new FormControl(0),
      "cash": new FormControl(0),
      "additional": new FormControl(0),
      "outside": new FormControl(0),
    });
  }

  ngOnInit(): void {
    this.currentCashService.getAll().subscribe(
      data => {this.currentCashDisplayValue = Math.floor(data).toString();},
      err =>  {this.currentCashDisplayValue = "N/A"; }
    );
    this.cashLocationsForm.valueChanges.subscribe(
      data => {this.realCashDisplayValue = Math.floor(this.sumAll(data)).toString();},
      err =>  {this.realCashDisplayValue = "N/A"; }
    );
  }

  sumAll(x: any) {
    return (
      x.privatUniversal +
      x.privatPayout +
      x.monoBlack +
      x.monoWhite +
      x.monoUsd +
      x.monoSupport +
      x.cash +
      x.additional);
  }
}
