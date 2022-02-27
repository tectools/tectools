import {Component, Input, OnInit} from '@angular/core';
import {ClipboardService} from "../../services/clipboard.service";

@Component({
  selector: 'app-encoder-one-in-multi-out',
  templateUrl: './encoder-one-in-multi-out.component.html',
  styleUrls: ['./encoder-one-in-multi-out.component.sass']
})
export class EncoderOneInMultiOutComponent implements OnInit {

  private error = "Error: No data handler specified for this EncoderOneInMultiOut child component.";

  @Input() placeholderFirst = "";

  @Input() generateResult: ((args: any) => string) = () => {return this.error};
  @Input() resultFieldData = [];

  @Input() rows = 10;
  @Input() showCopyToClipboardButton = true;
  @Input() inputTitle = "Raw";
  @Input() outputTitle = "Encoded";

  valFirst = "";
  valSecond = "";

  constructor(private clipboard: ClipboardService) { }

  ngOnInit(): void {
  }

}
