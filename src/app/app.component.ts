import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'TEC.TOOLS';

  menu = [
    {
      title: "Changelog",
      icon: "file-text",
      path: "changelog"
    },
    {
      title: "Contribute",
      icon: "github",
      path: "contribute"
    },
    {
      title: "API Documentation",
      icon: "layers",
      path: "api"
    }
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      if(e instanceof NavigationEnd) {
        // @ts-ignore
        window['goatcounter'].count({
          path: location.pathname + location.search + location.hash,
        })
      }
    })
  }
}
