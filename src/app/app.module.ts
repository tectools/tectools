import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IconsModule} from "./icons/icons.module";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CodeJsonComponent } from './components/code-json/code-json.component';
import { ToolHeadComponent } from './components/tool-head/tool-head.component';
import { DnsComponent } from './tools/dns/dns.component';
import { RdnsComponent } from './tools/rdns/rdns.component';
import { Base64Component } from './tools/base64/base64.component';
import { BasicauthComponent } from './tools/basicauth/basicauth.component';
import { BcryptComponent } from './tools/bcrypt/bcrypt.component';
import {UuidGeneratorComponent} from "./tools/uuid-generator/uuid-generator.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { GeneratorSimpleComponent } from './components/generator-simple/generator-simple.component';
import { EncoderBidirectionalComponent } from './components/encoder-bidirectional/encoder-bidirectional.component';
import { URLEncodeComponent } from './tools/urlencode/urlencode.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UuidGeneratorComponent,
    DnsComponent,
    ToolHeadComponent,
    CodeJsonComponent,
    RdnsComponent,
    Base64Component,
    BasicauthComponent,
    BcryptComponent,
    GeneratorSimpleComponent,
    EncoderBidirectionalComponent,
    URLEncodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
