import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'TEC.TOOLS';

  menu = [
    {
      title: "Changelog",
      icon: "file-text",
      path: "/changelog"
    },
    {
      title: "Contribute",
      icon: "github",
      path: "https://github.com/tectools/tectools"
    },
    {
      title: "API Documentation",
      icon: "layers",
      path: "/api"
    }
  ];

  constructor(private router: Router) {
  }
}
