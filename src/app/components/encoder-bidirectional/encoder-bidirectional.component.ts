import {Component, Input, OnInit} from '@angular/core';
import {ClipboardService} from "../../util/clipboard.service";

@Component({
  selector: 'tec-encoder-bidirectional',
  templateUrl: './encoder-bidirectional.component.html',
  styleUrls: ['./encoder-bidirectional.component.sass']
})
export class EncoderBidirectionalComponent implements OnInit {

  private error = "Error: No data handler specified for this EncoderBidirectional child component.";

  @Input() generateFirstResult: ((args: any) => string) = () => {return this.error};
  @Input() clipboardFilterFirst: ((value: string) => string) = ClipboardService.filterSame;

  @Input() generateSecondResult: ((args: any) => string) = () => {return this.error};
  @Input() clipboardFilterSecond: ((value: string) => string) = ClipboardService.filterSame;

  @Input() rows = 10;
  @Input() showCopyToClipboardButton = true;
  @Input() inputTitle = "Raw";
  @Input() outputTitle = "Encoded";

  valFirst = "";
  valSecond = "";

  constructor(private clipboard: ClipboardService) { }

  ngOnInit(): void {
  }

  copyToClipboardFirst() {
    this.clipboard.copy(this.valFirst, this.clipboardFilterFirst);

  }
  copyToClipboardSecond() {
    this.clipboard.copy(this.valSecond, this.clipboardFilterSecond);
  }

  inputFirst(value: string) {
    this.valFirst = value;
    this.valSecond = this.generateSecondResult(value);
  }

  inputSecond(value: string) {
    this.valSecond = value;
    this.valFirst = this.generateFirstResult(value);
  }
}
