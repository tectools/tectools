import { Component, OnInit } from '@angular/core';
import {v4 as uuid} from "uuid";
import {ClipboardService} from "../../services/clipboard.service";
import {ToolCategory} from "../../model/tool-category";
import {Tool} from "../../services/tool-data.service";

@Component({
  selector: 'app-uuid-generator',
  templateUrl: './uuid-generator.component.html',
  styleUrls: ['./uuid-generator.component.sass']
})
@Tool(
  "UUIDv4",
  ToolCategory.GENERATOR,
  ["ID", "unique"],
  "settings",
  "Generate random uuids"
)
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
