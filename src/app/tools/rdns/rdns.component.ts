import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-rdns',
  templateUrl: './rdns.component.html',
  styleUrls: ['./rdns.component.sass']
})
export class RdnsComponent implements OnInit {

  submitted = false;
  loading = false;

  data: any = null;

  public form = new FormGroup({
    dnsType: new FormControl('12', Validators.required),
    dnsHost: new FormControl('', [
      Validators.required,
      Validators.pattern('(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)')
    ])
  });

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  submitRequest() {
    this.submitted = true;
    if(this.form.valid) {
      this.loading = true;
      this.httpClient.get("https://dns.google/resolve?name="+this.form.value.dnsHost.split(".").reverse().join(".")+".in-addr.arpa&type="+this.form.value.dnsType).subscribe(
        (res) => {
          this.data = res;
          console.log(res);
          this.loading = false;
          this.submitted = false;
        },
        error => {
          this.loading = false;
          this.submitted = false;
        }
      );
    }
  }
}
