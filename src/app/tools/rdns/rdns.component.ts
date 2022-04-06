import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ToolCategory} from "../../model/tool-category";
import {ExternalDataProcessor} from "../../model/external-data-processor";
import {Router} from "@angular/router";
import {Tool} from "../../services/tool-data.service";
import {ToolCollection} from "../../model/tool-collection";

@Component({
  selector: 'app-rdns',
  templateUrl: './rdns.component.html',
  styleUrls: ['./rdns.component.sass']
})
@Tool(
  "Reverse DNS",
  ToolCollection.GENERAL,
  ToolCategory.WEB,
  ["DNS"],
  "database",
  "Run reverse dns queries (PTR)",
  [
    new ExternalDataProcessor("dns.google", "https://dns.google/")
  ]
)
export class RdnsComponent implements OnInit {

  data: any = null;
  error: any = null;

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  submit(type:string, hostaddress:string) {
    if(type && hostaddress && hostaddress.match('(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)')) {
      this.httpClient.get("https://dns.google/resolve?name="+hostaddress.split(".").reverse().join(".")+".in-addr.arpa&type="+type).subscribe({
        next: (result: any) => {
          this.data = result;
        },
        error: (err: any) => {
          this.error = err;
        }
      });
    }
  }
}
