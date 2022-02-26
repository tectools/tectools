import {Component, OnInit} from '@angular/core';
import * as URI from "uri-js";

@Component({
  selector: 'app-urlquery-parser',
  templateUrl: './urlquery-parser.component.html',
  styleUrls: ['./urlquery-parser.component.sass']
})
//TODO: Implement
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
