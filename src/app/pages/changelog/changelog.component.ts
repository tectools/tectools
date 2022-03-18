import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.sass']
})
export class ChangelogComponent implements OnInit {

  changes = [
    {
      date: "2022-03-18",
      changes: [
        {"type":"new", "description":"Random Password - Generate random passwords"}
      ]
    },
    {
      date: "2022-02-23",
      changes: [
        {
          "type":"hint",
          "description":"Initial Commit"
        },
        {"type":"new","description":"Base64 - Encode or decode base64 strings"},
        {"type":"new","description":"Basic Auth - Turn username and password into basic auth token or vice versa"},
        {"type":"new","description":"DNS - Run dns queries (A, AAAA, MX, SRV, PTR, ...)"},
        {"type":"new","description":"Reverse DNS - Run reverse dns queries (PTR)"},
        {"type":"new","description":"URL Encoding - Encode or decode uri strings"},
        {"type":"new","description":"UUIDv4 - Generate random uuids"},
        {"type":"new","description":"What's my IP adress? - See your current public IP"}
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
