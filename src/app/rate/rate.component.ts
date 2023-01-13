import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RateService} from "../services/api/rate/rate.service";
import {LocationTypes} from "../current-cash/current-cash/current-cash.component";

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  rateForm: FormGroup;
  constructor(private rateService: RateService) {
    this.rateForm = new FormGroup({
      "usd": new FormControl(),
      "eur": new FormControl(),
      "pln": new FormControl(),
    });
  }

  ngOnInit(): void {
    this.rateService.getLast().subscribe(
      data => {
        this.loadForm(data);
      },
      err =>  {console.log(err)}
    );
  }

  loadForm(data: any){
    console.log(data['usd']);
    this.rateForm.controls['usd'].setValue(data['usd']);
    this.rateForm.controls['eur'].setValue(data['eur']);
    this.rateForm.controls['pln'].setValue(data['pln']);
  }
}
