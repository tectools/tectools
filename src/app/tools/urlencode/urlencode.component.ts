import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urlencode',
  templateUrl: './urlencode.component.html',
  styleUrls: ['./urlencode.component.sass']
})
export class URLEncodeComponent implements OnInit {

  encode = (input: string): string => {
    try {
      return encodeURI(input);
    }
    catch(err) {
      console.log(err);
      return err instanceof Error ? err.message : "Unkown Error";
    }
  }

  decode = (input: string): string => {
    return decodeURI(input);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
