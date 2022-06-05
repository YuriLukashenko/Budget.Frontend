import { Component, OnInit } from '@angular/core';
import {FluxService} from "../../services/api/flux/flux.service";
import {RefluxService} from "../../services/api/reflux/reflux.service";

@Component({
  selector: 'app-reflux-month',
  templateUrl: './reflux-month.component.html',
  styleUrls: ['./reflux-month.component.css']
})
export class RefluxMonthComponent implements OnInit {
  context: any;
  constructor(private refluxService: RefluxService) { }

  ngOnInit(): void {
    this.setContext();
  }

  setContext(){
    this.refluxService.getMonthSpends().subscribe(
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
