import {Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ToolData} from "../../model/tool-data";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'tec-tool-head',
  templateUrl: './tool-head.component.html',
  styleUrls: ['./tool-head.component.sass']
})
export class ToolHeadComponent implements OnInit {

  public data: ToolData|undefined;

  constructor(private route:ActivatedRoute) {
    if(this.route && this.route.snapshot && this.route.snapshot.data) {
      this.data = <ToolData> this.route.snapshot.data;
    }
    else {
      this.data = undefined;
    }
  }

  ngOnInit(): void {

  }
}
