import { Component, OnInit } from '@angular/core';
import {CurrentCashService} from "../../services/api/current-cash/current-cash.service";
import {FormControl, FormGroup} from "@angular/forms";
import {LocationService} from "../../services/api/location/location.service";
import {RateService} from "../../services/api/rate/rate.service";
import {CashLocationsDTO} from "../../dtos/DTOs";

export enum LocationTypes
{
  None = 0,
  Cash = 1,
  PrivatUniversal = 2,
  PrivatPayout = 3,
  MonoBlack = 4,
  MonoWhite = 5,
  MonoUsd = 6,
  MonoSupport = 7,
  Additional = 8,
  Outside = 9
}

@Component({
  selector: 'app-current-cash',
  templateUrl: './current-cash.component.html',
  styleUrls: ['./current-cash.component.css']
})
export class CurrentCashComponent implements OnInit {
  currentCash: number = 0;
  realCash: number = 0;
  difference: number = 0;
  cashLocationsForm: FormGroup;
  usdRate: number = 0;
  dataStatus: string = 'ACTIVE' //| 'PENDING' | 'FAILURE';
  constructor(private currentCashService: CurrentCashService, private locationService: LocationService, private rateService: RateService) {
    this.cashLocationsForm = new FormGroup({
      "privatUniversal": new FormControl(),
      "privatPayout": new FormControl(),
      "monoBlack": new FormControl(),
      "monoWhite": new FormControl(),
      "monoUsd": new FormControl(),
      "monoSupport": new FormControl(),
      "cash": new FormControl(),
      "additional": new FormControl(),
      "addAdditional":new FormControl(),
      "outside": new FormControl(),
      "addOutside":new FormControl(),
    });
  }

  ngOnInit(): void {
    this.currentCashService.getAll().subscribe(
      data => {
        this.currentCash = Math.floor(data);
        this.difference = this.realCash - this.currentCash;
      },
      err =>  {this.currentCash = -Infinity}
    );
    this.locationService.getAll().subscribe(
      data => {this.loadForm(data)},
      err =>  {console.log(err)}
    );
    this.rateService.getByName("usd").subscribe(
      data => {this.usdRate = data},
      err =>  {console.log(err)}
    );
    this.cashLocationsForm.valueChanges.subscribe(
      data => {
        this.realCash = Math.floor(this.sumAll(data));
        this.difference = this.realCash - this.currentCash;
      },
      err =>  {this.realCash = -Infinity}
    );
  }

  loadForm(data: any){
    console.log(data);
    this.cashLocationsForm.controls['cash'].setValue(data.find((x:any) => x.type == LocationTypes.Cash).value);
    this.cashLocationsForm.controls['monoUsd'].setValue(data.find((x:any) => x.type == LocationTypes.MonoUsd).value);
    this.cashLocationsForm.controls['outside'].setValue(data.find((x:any) => x.type == LocationTypes.Outside).value);
    this.cashLocationsForm.controls['monoBlack'].setValue(data.find((x:any) => x.type == LocationTypes.MonoBlack).value);
    this.cashLocationsForm.controls['monoWhite'].setValue(data.find((x:any) => x.type == LocationTypes.MonoWhite).value);
    this.cashLocationsForm.controls['additional'].setValue(data.find((x:any) => x.type == LocationTypes.Additional).value);
    this.cashLocationsForm.controls['monoSupport'].setValue(data.find((x:any) => x.type == LocationTypes.MonoSupport).value);
    this.cashLocationsForm.controls['privatPayout'].setValue(data.find((x:any) => x.type == LocationTypes.PrivatPayout).value);
    this.cashLocationsForm.controls['privatUniversal'].setValue(data.find((x:any) => x.type == LocationTypes.PrivatUniversal).value);
  }

  sumAll(x: any) {
    return (
      x.privatUniversal +
      x.privatPayout +
      x.monoBlack +
      x.monoWhite +
      x.monoUsd * this.usdRate +
      x.monoSupport +
      x.cash +
      x.additional);
  }

  updateAdditional() {
    let prev = this.cashLocationsForm.controls['additional'].value;
    let current = this.cashLocationsForm.controls['addAdditional'].value;
    this.cashLocationsForm.controls['additional'].setValue(prev + current);
  }

  updateOutside(){
      let prev = this.cashLocationsForm.controls['outside'].value;
      let current =  this.cashLocationsForm.controls['addOutside'].value;
      this.cashLocationsForm.controls['outside'].setValue( prev + current);
  }

  onSubmit(){
    this.dataStatus = 'PENDING';
    let body = this.map(this.cashLocationsForm.value);
    this.locationService.postAll(body).subscribe(
      data => {this.dataStatus = 'ACTIVE'},
      err =>  {this.dataStatus = 'FAILURE'}
    );
  }

  map(formGroupValue: any): CashLocationsDTO[]{
    let result: CashLocationsDTO[] = [];
    result.push({type: LocationTypes.Cash, value: formGroupValue.cash})
    result.push({type: LocationTypes.PrivatUniversal, value: formGroupValue.privatUniversal})
    result.push({type: LocationTypes.PrivatPayout, value: formGroupValue.privatPayout})
    result.push({type: LocationTypes.MonoBlack, value: formGroupValue.monoBlack})
    result.push({type: LocationTypes.MonoWhite, value: formGroupValue.monoWhite})
    result.push({type: LocationTypes.MonoUsd, value: formGroupValue.monoUsd})
    result.push({type: LocationTypes.MonoSupport, value: formGroupValue.monoSupport})
    result.push({type: LocationTypes.Additional, value: formGroupValue.additional})
    result.push({type: LocationTypes.Outside, value: formGroupValue.outside})
    return result;
  }
}
