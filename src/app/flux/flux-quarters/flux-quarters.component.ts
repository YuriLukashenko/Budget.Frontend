import { Component, OnInit } from '@angular/core';
import {FluxService} from "../../services/api/flux/flux.service";

@Component({
  selector: 'app-flux-quarters',
  templateUrl: './flux-quarters.component.html',
  styleUrls: ['./flux-quarters.component.css']
})
export class FluxQuartersComponent implements OnInit {
  context: any;
  constructor(private fluxService: FluxService) { }

  ngOnInit(): void {
    this.setContext();
  }

  setContext(){
    this.fluxService.getQuarterProfits().subscribe(
      data => {
        this.context = {
          data
        };
      },
      err => {
        this.context = JSON.parse(err.error).message;
      }
    );
  }

}
