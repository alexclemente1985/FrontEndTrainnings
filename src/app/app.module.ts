import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './features/header/header.module';
import { BannerModule } from './features/banner/banner.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    BannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
