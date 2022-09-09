import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FluxService} from "../../services/api/flux/flux.service";
import {IFluxDTO, IFluxTypes} from "../../dtos/DTOs";
import {FormatService} from "../../services/format/format.service";

@Component({
  selector: 'app-flux-add',
  templateUrl: './flux-add.component.html',
  styleUrls: ['./flux-add.component.css']
})
export class FluxAddComponent implements OnInit {
  fluxForm: FormGroup;
  fluxTypes: IFluxTypes[] = [];
  dataStatus: string = 'ACTIVE' //| 'PENDING' | 'FAILURE';
  constructor(private fluxService: FluxService, private formatService: FormatService) {
    this.fluxForm = new FormGroup({
      "type": new FormControl(""),
      "value": new FormControl(),
      "date": new FormControl(formatService.formatDate(new Date())),
      "comment": new FormControl(),
      "isAutoConverting": new FormControl(),
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
    this.fluxService.add(addFluxBody).subscribe(
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
      isAutoConverting: formGroupValue.isAutoConverting
    };
  }
}
