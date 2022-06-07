import { Component } from '@angular/core';
import {ToolCategory} from "../../model/tool-category";
import {Tool} from "../../services/tool-data.service";
import {ToolCollection} from "../../model/tool-collection";

@Component({
  selector: 'app-basicauth',
  templateUrl: './basicauth.component.html',
  styleUrls: ['./basicauth.component.sass']
})
@Tool(
  "Basic Auth",
  ToolCollection.GENERAL,
  ToolCategory.ENCODE_DECODE,
  ["BasicAuth", "htpasswd", "Base64"],
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
