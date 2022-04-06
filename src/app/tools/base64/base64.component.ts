import { Component, OnInit } from '@angular/core';
import {ToolCategory} from "../../model/tool-category";
import {Tool} from "../../services/tool-data.service";
import {ToolCollection} from "../../model/tool-collection";

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.sass']
})
@Tool(
  "Base64",
  ToolCollection.GENERAL,
  ToolCategory.ENCODE_DECODE,
  ["Base64"],
  "shuffle",
  "Encode or decode base64 strings"
)
export class Base64Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  encode = (input: string): string => {
    try {
      return btoa(input);
    }
    catch(err) {
      return err instanceof Error ? err.message : "Unkown Error";
    }
  }

  decode = (input: string): string => {
    return atob(input);
  }
}
