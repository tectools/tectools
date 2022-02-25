import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Tool} from "../../services/tool-data.service";
import {ToolCategory} from "../../model/tool-category";
import {ExternalDataProcessor} from "../../model/external-data-processor";

@Component({
  selector: 'app-basicauth',
  templateUrl: './basicauth.component.html',
  styleUrls: ['./basicauth.component.sass']
})
@Tool(
  "Basic Auth",
  ToolCategory.ENCODE_DECODE,
  ["BasicAuth", "htpasswd"],
  "shuffle",
  "Turn username and password into basic auth token or vice versa"
)
export class BasicauthComponent {

  constructor() { }

  encode = (input1: string, input2: string): string => {
    if(!input1 || !input2) {
      return "";
    }

    try {
      return btoa(input1+":"+input2);
    }
    catch(err) {
      return err instanceof Error ? err.message : "Unkown Error";
    }
  }

  decode = (input: string): string[] => {
    const data = atob(input).split(":");
    if(data.length < 2) {
      return ["", ""];
    }

    return data;
  }
}
