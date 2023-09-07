import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrcodeScannerComponent } from './qrcode-scanner/qrcode-scanner.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [
    AppComponent,
    QrcodeScannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZXingScannerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
