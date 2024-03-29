import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IFluxDTO, IFluxTypes, IRefluxDTO, IRefluxTypes} from "../../dtos/DTOs";
import {RefluxService} from "../../services/api/reflux/reflux.service";
import {FormatService} from "../../services/format/format.service";

@Component({
  selector: 'app-reflux-add',
  templateUrl: './reflux-add.component.html',
  styleUrls: ['./reflux-add.component.css']
})
export class RefluxAddComponent implements OnInit, AfterViewInit  {
  refluxForm: FormGroup;
  refluxTypes: IRefluxTypes[] = [];
  dataStatus: string = 'ACTIVE' //| 'PENDING' | 'FAILURE';
  constructor(private refluxService: RefluxService,  private formatService: FormatService) {
    this.refluxForm = new FormGroup({
      "type": new FormControl(""),
      "value": new FormControl(),
      "date": new FormControl(formatService.formatDate(new Date())),
      "comment": new FormControl(),
    });
  }

  ngOnInit(): void {
    this.init();
  }

  ngAfterViewInit() {
  }

  init(){
    this.refluxService.getRefluxTypes().subscribe(
      data => {
        this.refluxTypes = data
      },
      err => {
        this.refluxTypes = JSON.parse(err.error).message;
      }
    );
  }

  onSubmit(){
    this.dataStatus = 'PENDING';
    let addRefluxBody = this.mapReflux(this.refluxForm.value);
    this.refluxService.add(addRefluxBody).subscribe(
      data => {this.dataStatus = 'ACTIVE'},
      err =>  {this.dataStatus = 'FAILURE'}
    );
  }

  mapReflux(formGroupValue: any): IRefluxDTO {
    return {
      rtId: formGroupValue.type.id,
      value: formGroupValue.value,
      date: formGroupValue.date,
      comment: formGroupValue.comment,
    };
  }
}
