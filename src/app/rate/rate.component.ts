import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RateService} from "../services/api/rate/rate.service";
import {LocationTypes} from "../current-cash/current-cash/current-cash.component";
import {IFluxDTO, IRateDTO} from "../dtos/DTOs";

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  rateForm: FormGroup;
  dataStatus: string = 'ACTIVE' //| 'PENDING' | 'FAILURE';
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

  onSubmit(){
    this.dataStatus = 'PENDING';
    let addRateBody = this.mapRate(this.rateForm.value);
    this.rateService.add(addRateBody).subscribe(
      data => {this.dataStatus = 'ACTIVE'},
      err =>  {this.dataStatus = 'FAILURE'}
    );
  }

  mapRate(formGroupValue: any): IRateDTO{
    return {
      date: new Date(),
      usd: formGroupValue.usd,
      eur: formGroupValue.eur,
      pln: formGroupValue.pln
    };
  }
}
