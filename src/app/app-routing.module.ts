import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {UuidGeneratorComponent} from "./tools/uuid-generator/uuid-generator.component";
import {DnsComponent} from "./tools/dns/dns.component";
import {RdnsComponent} from "./tools/rdns/rdns.component";
import {Base64Component} from "./tools/base64/base64.component";
import {BasicauthComponent} from "./tools/basicauth/basicauth.component";
import {URLEncodeComponent} from "./tools/urlencode/urlencode.component";
import {BcryptComponent} from "./tools/bcrypt/bcrypt.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'uuid',
    component: UuidGeneratorComponent,
    data: {
      title: "UUIDv4",
      category: "Generator",
      tags: ["UUID"],
      icon: "settings",
      description: "Generate random UUIDs",
      externalDataProcessor: []
    }
  },/*
  {
    path: 'dns',
    component: DnsComponent,
    data: {
      title: "DNS",
      category: "Generator",
      tags: ["DNS"],
      icon: "database",
      description: "Run DNS queries (A, AAAA, PTR, SPF, ...)",
      externalDataProcessors: [
          {
            name: "dns.google",
            url: "https://dns.google/"
          },
        ],
    }
  },
  {
    path: 'rdns',
    component: RdnsComponent,
    data: {
      title: "Reverse DNS",
      category: "Generator",
      tags: ["DNS"],
      icon: "database",
      description: "Run reverse dns queries (PTR)",
      externalDataProcessors: [
        {
          name: "dns.google",
          url: "https://dns.google/"
        },
      ],
    }
  },*/
  {
    path: 'base64',
    component: Base64Component,
    data: {
      title: "Base64",
      category: "Encoder/Decoder",
      tags: ["Base64"],
      icon: "shuffle",
      description: "Encode or decode base64 strings",
      externalDataProcessor: []
    }
  },
  {
    path: 'url',
    component: URLEncodeComponent,
    data: {
      title: "URL Encoding",
      category: "Encoder/Decoder",
      tags: ["URL"],
      icon: "link",
      description: "Encode or decode uri strings",
      externalDataProcessor: []
    }
  }/*,
  {
    path: 'basicauth',
    component: BasicauthComponent,
    data: {
      title: "Basic Auth",
      category: "Encoder/Decoder",
      tags: ["BasicAuth", "htpasswd"],
      icon: "shuffle",
      description: "Turn username and password into basic auth token or vice versa",
      externalDataProcessor: []
    }
  }*/,
  {
    path: 'bcrypt',
    component: BcryptComponent,
    data: {
      title: "Bcrypt",
      category: "Cryptography",
      tags: ["Bcrypt", "encryption"],
      icon: "shield",
      description: "Encrypt strings using bcrypt algorithm and check hashes",
      externalDataProcessor: []
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
