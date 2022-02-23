import { Component } from '@angular/core';

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
      path: "changelog"
    },
    {
      title: "Contribute",
      icon: "github",
      path: "contribute"
    }
  ];
}
