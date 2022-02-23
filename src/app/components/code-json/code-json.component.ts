import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tec-code-json',
  templateUrl: './code-json.component.html',
  styleUrls: ['./code-json.component.sass']
})
export class CodeJsonComponent implements OnInit {

  @Input() json: any;

  constructor() { }

  ngOnInit(): void {
  }

}
