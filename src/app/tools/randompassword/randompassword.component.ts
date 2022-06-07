import { Component, OnInit } from '@angular/core';
import {Tool} from "../../services/tool-data.service";
import {ToolCategory} from "../../model/tool-category";
import {ExternalDataProcessor} from "../../model/external-data-processor";
import {ClipboardService} from "../../services/clipboard.service";
import {v4 as uuid} from "uuid";
import {ToolCollection} from "../../model/tool-collection";

@Component({
  selector: 'app-randompassword',
  templateUrl: './randompassword.component.html',
  styleUrls: ['./randompassword.component.sass']
})
@Tool(
  "Random Password",
  ToolCollection.GENERAL,
  ToolCategory.WEB,
  ["Password"],
  "shield",
  "Generate random passwords",
  [],
  "randompw"
)
export class RandompasswordComponent implements OnInit {

  clipboardFilter = ClipboardService.filterOnlyFirstLine;

  randomPasswords = (): string => {
    let pws = [];
    for(let i = 0; i < 10; i++) {
      pws.push(this.generatePassword());
    }
    return pws.join("\r\n");
  };

  generatePassword() {
    var length = 20,
      charset = "abcde#!fghijklm-_nopqrstuvwxyzABCDEFGHIJ-_KLMNOPQRST#UVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
