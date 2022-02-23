import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dns',
  templateUrl: './dns.component.html',
  styleUrls: ['./dns.component.sass']
})
export class DnsComponent implements OnInit {

  submitted = false;
  loading = false;

  data: any = null;

  public form = new FormGroup({
    dnsType: new FormControl('1', Validators.required),
    dnsHost: new FormControl('', [
      Validators.required,
      //Validators.pattern('(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)'),
      Validators.pattern(/^([a-z0-9]+(-[a-z0-9]+)*\.){1,2}([a-z]{2,12})$/i)
    ])
  });

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  submitRequest() {
    this.submitted = true;
    if(this.form.valid) {
      this.loading = true;
      this.httpClient.get("https://dns.google/resolve?name="+this.form.value.dnsHost+"&type="+this.form.value.dnsType).subscribe(
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

  selectionChange(target: EventTarget|null) {
    if(target instanceof HTMLSelectElement) {
      //PTR selected -> Redirect to Reverse-DNS Tool
      if(target.value === "12") {
        this.router.navigate(['/rdns']);
      }
    }
  }
}
