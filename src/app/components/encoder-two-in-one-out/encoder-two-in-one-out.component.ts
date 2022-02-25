import {Component, Input, OnInit} from '@angular/core';
import {ClipboardService} from "../../services/clipboard.service";

@Component({
  selector: 'tec-encoder-two-in-one-out',
  templateUrl: './encoder-two-in-one-out.component.html',
  styleUrls: ['./encoder-two-in-one-out.component.sass']
})
export class EncoderTwoInOneOutComponent implements OnInit {

  private error = "Error: No data handler specified for this EncoderBidirectional child component.";

  /* HANDLER FOR INPUT SIDE */
  @Input() generateFirstResult: ((args: any) => string[]) = () => {return [this.error, this.error]};
  /* HANDLER FOR OUTPUT SIDE */
  @Input() generateSecondResult: ((value1: any, value2: any) => string) = () => {return this.error};

  /* FIRST INPUT */
  @Input() inputTitle1 = "Raw 1";
  @Input() clipboardFilterFirst1: ((value: string) => string) = ClipboardService.filterSame;
  @Input() placeholderFirst1 = "";

  /* SECOND INPUT */
  @Input() inputTitle2 = "Raw 2";
  @Input() clipboardFilterFirst2: ((value: string) => string) = ClipboardService.filterSame;
  @Input() placeholderFirst2 = "";

  /* OUTPUT */
  @Input() clipboardFilterSecond: ((value: string) => string) = ClipboardService.filterSame;
  @Input() outputTitle = "Encoded";
  @Input() placeholderSecond = "";
  @Input() rows = 10;

  @Input() showCopyToClipboardButton = true;

  valFirst1 = "";
  valFirst2 = "";
  valSecond = "";

  constructor(private clipboard: ClipboardService) { }

  ngOnInit(): void {
  }

  copyToClipboardFirst1() {
    this.clipboard.copy(this.valFirst1, this.clipboardFilterFirst1);

  }
  copyToClipboardFirst2() {
    this.clipboard.copy(this.valFirst1, this.clipboardFilterFirst2);

  }
  copyToClipboardSecond() {
    this.clipboard.copy(this.valSecond, this.clipboardFilterSecond);
  }

  inputFirst(value1:string, value2: string) {
    this.valFirst1 = value1;
    this.valFirst2 = value2;
    this.valSecond = this.generateSecondResult(value1, value2);
  }

  inputSecond(value: string) {
    this.valSecond = value;

    const data = this.generateFirstResult(value);
    if(data.length < 2) {
      return;
    }

    this.valFirst1 = data[0];
    this.valFirst2 = data[1];
  }
}
