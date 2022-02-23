import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'tec-tool-head',
  templateUrl: './tool-head.component.html',
  styleUrls: ['./tool-head.component.sass']
})
export class ToolHeadComponent implements OnInit {

  public data: any;

  constructor(private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.data = this.route.snapshot.data;
  }
}
