import { Component, OnInit } from '@angular/core';
import {Tool} from "../../services/tool-data.service";
import {ToolCategory} from "../../model/tool-category";
import {ExternalDataProcessor} from "../../model/external-data-processor";
import {HttpClient} from "@angular/common/http";
import {ToolCollection} from "../../model/tool-collection";

@Component({
  selector: 'app-my-ip',
  templateUrl: './my-ip.component.html',
  styleUrls: ['./my-ip.component.sass']
})
@Tool(
  "What's my IP address?",
  ToolCollection.GENERAL,
  ToolCategory.WEB,
  ["IP"],
  "share-2",
  "See your current public IP",
  [
    ExternalDataProcessor.SELF
  ],
  "whatsmyip"
)
export class MyIPComponent implements OnInit {

  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(window.location.origin + '/api/whatsmyip').subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
