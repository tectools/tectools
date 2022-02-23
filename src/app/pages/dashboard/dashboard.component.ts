import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public tools: any[] = [];

  constructor(private router: Router) {
    router.config.forEach((route) => {
      if(route.data) {
        route.data["path"] = route.path;
        this.tools.push(route.data);
      }
    });
  }

  ngOnInit(): void {
  }
}
