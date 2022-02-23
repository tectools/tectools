import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  public static filterOnlyFirstLine = (value: string) => {
      return value.split("\r\n")[0];
  };
  public static filterSame = (value: string) => { return value; }

  constructor() {
  }

  public copy(val: string, filter: (value: string) => string = ClipboardService.filterSame) {
    window.navigator.clipboard.writeText(filter(val));
  }
}
