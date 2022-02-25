import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClipboardService} from "../../services/clipboard.service";

@Component({
  selector: 'tec-generator-simple',
  templateUrl: './generator-simple.component.html',
  styleUrls: ['./generator-simple.component.sass']
})
export class GeneratorSimpleComponent implements OnInit {

  @Input() generateResult: (() => string) | undefined;
  @Input() clipboardFilter: ((value: string) => string) = ClipboardService.filterSame;

  @Input() rows: number = 10;
  @Input() showRegenerateButton = true;
  @Input() showCopyToClipboardButton = true;

  val = "";

  constructor(private clipboard: ClipboardService) { }

  ngOnInit(): void {
    if(this.generateResult != undefined) {
      this.val = this.generateResult();
    }
  }

  copyToClipboard() {
    if(this.val) {
      this.clipboard.copy(this.val, this.clipboardFilter);
    }
  }
}
