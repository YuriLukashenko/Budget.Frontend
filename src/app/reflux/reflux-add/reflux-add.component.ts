import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IFluxTypes} from "../../dtos/DTOs";
import {RefluxService} from "../../services/api/reflux/reflux.service";
import {FormatService} from "../../services/format/format.service";

@Component({
  selector: 'app-reflux-add',
  templateUrl: './reflux-add.component.html',
  styleUrls: ['./reflux-add.component.css']
})
export class RefluxAddComponent implements OnInit {
  refluxForm: FormGroup;
  refluxTypes: IFluxTypes[] = [];
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
  }

  onSubmit(){
    this.dataStatus = 'PENDING';
  }

}
