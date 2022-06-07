import {Component} from '@angular/core';
import {openNewTab} from "./services/clipboard.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'TEC.TOOLS';

  openNewTab = openNewTab;
}
