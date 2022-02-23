import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {v4 as uuid} from "uuid";
import {ClipboardService} from "../../util/clipboard.service";

@Component({
  selector: 'app-uuid-generator',
  templateUrl: './uuid-generator.component.html',
  styleUrls: ['./uuid-generator.component.sass']
})
export class UuidGeneratorComponent implements OnInit {

  clipboardFilter = ClipboardService.filterOnlyFirstLine;

  randomUuids = (): string => {
    let uuids = [];
    for(let i = 0; i < 10; i++) {
      uuids.push(uuid());
    }
    return uuids.join("\r\n");
  };

  constructor() { }

  ngOnInit(): void {
  }
}
