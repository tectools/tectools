import { Component, OnInit } from '@angular/core';
import {ToolCategory} from "../../model/tool-category";
import {Tool} from "../../services/tool-data.service";

@Component({
  selector: 'app-urlencode',
  templateUrl: './urlencode.component.html',
  styleUrls: ['./urlencode.component.sass']
})
@Tool(
  "URL Encoding",
  ToolCategory.WEB,
  ["URL"],
  "link",
  "Encode or decode uri strings"
)
export class URLEncodeComponent implements OnInit {

  encode = (input: string): string => {
    try {
      return encodeURI(input);
    }
    catch(err) {
      console.log(err);
      return err instanceof Error ? err.message : "Unkown Error";
    }
  }

  decode = (input: string): string => {
    return decodeURI(input);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
