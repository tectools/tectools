import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ToolCategory} from "../../model/tool-category";
import {ExternalDataProcessor} from "../../model/external-data-processor";
import {Tool} from "../../services/tool-data.service";
import {ToolCollection} from "../../model/tool-collection";

@Component({
  selector: 'app-dns',
  templateUrl: './dns.component.html',
  styleUrls: ['./dns.component.sass']
})
@Tool(
  "DNS",
  ToolCollection.GENERAL,
  ToolCategory.WEB,
  ["DNS"],
  "database",
  "Run dns queries (A, AAAA, MX, SRV, PTR, ...)",
  [
    new ExternalDataProcessor(
      "dns.google",
      "https://dns.google/",
      "https://developers.google.com/speed/public-dns/privacy",
      "https://developers.google.com/speed/public-dns/terms")
  ]
)
export class DnsComponent implements OnInit {

  data: any = null;
  error: any = null;

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  submit(type:string, hostname:string) {
    if(type && hostname && hostname.match(/^([a-z0-9]+(-[a-z0-9]+)*\.){1,2}([a-z]{2,12})$/i)) {
      this.httpClient.get("https://dns.google/resolve?name="+hostname+"&type="+type).subscribe({
        next: (result: any) => {
          this.data = result;
        },
        error: (err: any) => {
          this.error = err;
        }
      });
    }
  }

  selectionChange(target: EventTarget|null) {
    if(target instanceof HTMLSelectElement) {
      //PTR selected -> Redirect to Reverse-DNS Tool
      if(target.value === "12") {
        this.router.navigate(['/reverse_dns']);
      }
    }
  }
}
