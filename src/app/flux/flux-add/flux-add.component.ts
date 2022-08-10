import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FluxService} from "../../services/api/flux/flux.service";
import {IFluxDTO, IFluxTypes} from "../../dtos/DTOs";

@Component({
  selector: 'app-flux-add',
  templateUrl: './flux-add.component.html',
  styleUrls: ['./flux-add.component.css']
})
export class FluxAddComponent implements OnInit {
  fluxForm: FormGroup;
  fluxTypes: IFluxTypes[] = [];
  dataStatus: string = 'ACTIVE' //| 'PENDING' | 'FAILURE';
  constructor(private fluxService: FluxService) {
    this.fluxForm = new FormGroup({
      "type": new FormControl(""),
      "value": new FormControl(),
      "date": new FormControl(this.formatDate(new Date())),
      "comment": new FormControl(),
    });
  }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.fluxService.getFluxTypes().subscribe(
      data => {
        this.fluxTypes = data
      },
      err => {
        this.fluxTypes = JSON.parse(err.error).message;
      }
    );
  }

  onSubmit(){
    this.dataStatus = 'PENDING';
    let addFluxBody = this.mapFlux(this.fluxForm.value);
    this.fluxService.addFlux(addFluxBody).subscribe(
      data => {this.dataStatus = 'ACTIVE'},
      err =>  {this.dataStatus = 'FAILURE'}
    );
  }

  mapFlux(formGroupValue: any): IFluxDTO{
    return {
      ftId: formGroupValue.type.ftId,
      value: formGroupValue.value,
      date: formGroupValue.date,
      comment: formGroupValue.comment,
    };
  }

  formatDate(date: any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
}
