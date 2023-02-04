import { Component, OnInit } from '@angular/core';
import {CurrentCashService} from "../../services/api/current-cash/current-cash.service";
import {FormControl, FormGroup} from "@angular/forms";
import {LocationService} from "../../services/api/location/location.service";
import {RateService} from "../../services/api/rate/rate.service";
import {CashLocationsDTO, IFopDTO} from "../../dtos/DTOs";
import {FopService} from "../../services/api/fop/fop.service";

export enum LocationTypes {
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
  fopBalance: IFopDTO[] = [];
  workingUsd: number = 0;
  workingHrivnas: number = 0;
  totalCurrent: number = 0;
  constructor(private currentCashService: CurrentCashService,
              private locationService: LocationService,
              private rateService: RateService,
              private fopService: FopService) {
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
      "workingFop":new FormControl(),
      "cumulativeFop":new FormControl()
    });
  }

  ngOnInit(): void {
    this.currentCashService.getAll().subscribe(
      data => {
        this.currentCash = Math.floor(data);
        this.updateTotalCurrent();
        this.updateDifference();
      },
      err =>  {this.currentCash = -Infinity}
    );
    this.locationService.getAll().subscribe(
      data => {this.loadForm(data)},
      err =>  {console.log(err)}
    );
    this.rateService.getByName("usd").subscribe(
      data => {
        this.usdRate = data
        this.updateWorkingHrivnas();
        this.realCash = this.calculateSum();
      },
      err =>  {console.log(err)}
    );
    this.fopService.getAll().subscribe(
      data => {
        this.fopBalance = data;
        this.loadFop(data);
      },
      err =>  {console.log(err)}
    );
    this.cashLocationsForm.valueChanges.subscribe(
      data => {
        this.realCash = Math.floor(this.sumAll(data));
        this.workingUsd = data.workingFop
        this.updateDifference();
        this.updateFop();
      },
      err =>  {this.realCash = -Infinity}
    );
  }

  loadForm(data: any){
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

  loadFop(data: IFopDTO[]) {
    console.log(data);
    this.workingUsd = data.find((x:IFopDTO) => x.type == 'Working')?.value ?? 0;
    this.cashLocationsForm.controls['workingFop'].setValue(this.workingUsd);
    this.cashLocationsForm.controls['cumulativeFop'].setValue(data.find((x:IFopDTO) => x.type == 'Cumulative')?.value ?? 0);
    this.updateFop();
  }

  updateFop(){
    this.updateWorkingHrivnas();
    this.updateTotalCurrent();
  }

  updateWorkingHrivnas(){
    this.workingHrivnas = this.workingUsd * this.usdRate;
  }

  updateTotalCurrent(){
    this.totalCurrent = this.workingHrivnas + this.currentCash;
  }

  updateDifference(){
    this.difference = this.realCash - this.currentCash;
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
    let locationBody = this.mapLocation(this.cashLocationsForm.value);
    this.locationService.postAll(locationBody).subscribe(
      data => {this.dataStatus = 'ACTIVE'},
      err =>  {this.dataStatus = 'FAILURE'}
    );
    let fopBody = this.mapFop(this.cashLocationsForm.value);
    this.fopService.postAll(fopBody).subscribe(
      data => {this.dataStatus = 'ACTIVE'},
      err =>  {this.dataStatus = 'FAILURE'}
    );
  }

  mapLocation(formGroupValue: any): CashLocationsDTO[]{
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

  mapFop(formGroupValue: any): IFopDTO[] {
    let result: IFopDTO[] = [];
    result.push({fopId: 1, type: "Working", value: formGroupValue.workingFop});
    result.push({fopId: 2, type: "Cumulative", value: formGroupValue.cumulativeFop});
    return result;
  }

  private calculateSum() {
    if(this.cashLocationsForm.controls['cash'].value !== undefined
      && this.cashLocationsForm.controls['monoUsd'].value !== undefined
      && this.cashLocationsForm.controls['monoBlack'].value !== undefined
      && this.cashLocationsForm.controls['monoWhite'].value !== undefined
      && this.cashLocationsForm.controls['additional'].value !== undefined
      && this.cashLocationsForm.controls['monoSupport'].value !== undefined
      && this.cashLocationsForm.controls['privatPayout'].value !== undefined
      && this.cashLocationsForm.controls['privatUniversal'].value !== undefined)
    {
      console.log("sdfjskldfjlsglgdfs");
      return (
        this.cashLocationsForm.controls['privatUniversal'].value +
        this.cashLocationsForm.controls['privatPayout'].value +
        this.cashLocationsForm.controls['monoBlack'].value +
        this.cashLocationsForm.controls['monoWhite'].value +
        this.cashLocationsForm.controls['monoUsd'].value * this.usdRate +
        this.cashLocationsForm.controls['monoSupport'].value +
        this.cashLocationsForm.controls['cash'].value +
        this.cashLocationsForm.controls['additional'].value);
    }
  }
}
