import { Component, OnInit } from '@angular/core';
import {FluxService} from "../../services/api/flux/flux.service";

@Component({
  selector: 'app-flux-delta-quarters',
  templateUrl: './flux-delta-quarters.component.html',
  styleUrls: ['./flux-delta-quarters.component.css']
})
export class FluxDeltaQuartersComponent implements OnInit {
  context: any;
  constructor(private fluxService: FluxService) { }

  ngOnInit(): void {
    this.setContext();
  }

  setContext(){
    this.fluxService.getDeltaQuarterProfits().subscribe(
      data => {
        this.context = {
          data,
          settings: {
            numberAxisFormat: "#%",
            numberTooltipFormat: "#.00%",
          }
        }
      },
      err => {
        this.context = JSON.parse(err).message;
      }
    );
  }
}
