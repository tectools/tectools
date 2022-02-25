import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ToolData} from "../../model/tool-data";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public tools: ToolData[] = [];

  constructor(private router: Router) {
    router.config.forEach((route) => {
      if(route.data) {
        this.tools.push(<ToolData> route.data);
      }
    });
  }

  ngOnInit(): void {
  }
}
