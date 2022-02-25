import { Component, OnInit } from '@angular/core';
import {Tool} from "../../services/tool-data.service";
import {ToolCategory} from "../../model/tool-category";
import * as URI from "uri-js";

@Component({
  selector: 'app-urlquery-parser',
  templateUrl: './urlquery-parser.component.html',
  styleUrls: ['./urlquery-parser.component.sass']
})
//TODO: Implement URL Query Parser
export class URLQueryParserComponent implements OnInit {

  data: any;

  constructor() { }

  ngOnInit(): void {
  }

  inputChange(value: string) {
    value = value.trim();
    this.data = URI.parse(value);
  }
}
