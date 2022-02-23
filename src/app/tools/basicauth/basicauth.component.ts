import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-basicauth',
  templateUrl: './basicauth.component.html',
  styleUrls: ['./basicauth.component.sass']
})
export class BasicauthComponent implements OnInit {

  public formEncode = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    out: new FormControl('')
  });

  public formDecode = new FormGroup({
    encoded: new FormControl('', Validators.required),
    outUser: new FormControl(''),
    outPassword: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  submitEncodeRequest() {
    if(this.formEncode.valid) {
      this.formEncode.controls['out'].setValue(btoa(this.formEncode.value.username + ":" + this.formEncode.value.password));
    }

  }

  submitDecodeRequest() {
    if(this.formDecode.valid) {
      const data = atob(this.formDecode.value.encoded).split(":");
      this.formDecode.controls['outUser'].setValue(data[0]);
      this.formDecode.controls['outPassword'].setValue(data[1]);
    }
  }

  copyEncodedToClipboard() {
    if(this.formEncode.value.out.length == 0) {
      return;
    }
  }

  copyDecodedUserToClipboard() {
    if(this.formDecode.value.outUser.length == 0) {
      return;
    }
  }

  copyDecodedPasswordToClipboard() {
    if(this.formDecode.value.outPassword.length == 0) {
      return;
    }
  }
}
