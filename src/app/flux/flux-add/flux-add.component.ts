import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-flux-add',
  templateUrl: './flux-add.component.html',
  styleUrls: ['./flux-add.component.css']
})
export class FluxAddComponent implements OnInit {
  fluxForm: FormGroup;
  constructor() {
    this.fluxForm = new FormGroup({
      "type": new FormControl(),
      "value": new FormControl(),
      "date": new FormControl(),
      "comment": new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
