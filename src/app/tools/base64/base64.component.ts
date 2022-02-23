import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.sass']
})
export class Base64Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  encode = (input: string): string => {
    try {
      return btoa(input);
    }
    catch(err) {
      console.log(err);
      return err instanceof Error ? err.message : "Unkown Error";
    }
  }

  decode = (input: string): string => {
    return atob(input);
  }
}
