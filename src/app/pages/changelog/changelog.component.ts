import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.sass']
})
export class ChangelogComponent implements OnInit {

  changes = [
    {
      date: "2022-02-23",
      changes: [
        {
          "type":"new",
          "description":"Initial Commit"
        },
        {
          "type":"fix",
          "description":"Initial Commit"
        },
        {
          "type":"improved",
          "description":"Initial Commit"
        },
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
