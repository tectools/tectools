import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IconsModule} from "./icons/icons.module";
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {CodeJsonComponent} from './components/code-json/code-json.component';
import {ToolHeadComponent} from './components/tool-head/tool-head.component';
import {DnsComponent} from './tools/dns/dns.component';
import {RdnsComponent} from './tools/rdns/rdns.component';
import {Base64Component} from './tools/base64/base64.component';
import {BasicauthComponent} from './tools/basicauth/basicauth.component';
import {UuidGeneratorComponent} from "./tools/uuid-generator/uuid-generator.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {GeneratorSimpleComponent} from './components/generator-simple/generator-simple.component';
import {EncoderBidirectionalComponent} from './components/encoder-bidirectional/encoder-bidirectional.component';
import {URLEncodeComponent} from './tools/urlencode/urlencode.component';
import {ToolDataService} from "./services/tool-data.service";
import {URLQueryParserComponent} from './tools/urlquery-parser/urlquery-parser.component';
import {EncoderTwoInOneOutComponent} from './components/encoder-two-in-one-out/encoder-two-in-one-out.component';
import {EncoderOneInMultiOutComponent} from './components/encoder-one-in-multi-out/encoder-one-in-multi-out.component';
import {MyIPComponent} from './tools/my-ip/my-ip.component';
import {RandompasswordComponent} from './tools/randompassword/randompassword.component';
import {CookieService} from "ngx-cookie-service";

export function initializeApp(toolDataService: ToolDataService) {
  return(): void => {
      return toolDataService.initRoutes();
  };
}

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
    GeneratorSimpleComponent,
    EncoderBidirectionalComponent,
    URLEncodeComponent,
    URLQueryParserComponent,
    EncoderTwoInOneOutComponent,
    EncoderOneInMultiOutComponent,
    MyIPComponent,
    RandompasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
  ],
  providers: [
    CookieService,
    ToolDataService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [ToolDataService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
