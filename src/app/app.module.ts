import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './features/header/header.module';
import { BannerModule } from './features/banner/banner.module';
import { CarrosselComponent } from './features/carrossel/carrossel.component';
import { CardModule } from './features/card/card.module';
import { TopicsModule } from './features/topics/topics.module';
import { ContactModule } from './features/contact/contact.module';
import { FooterModule } from './features/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    BannerModule,
    CarrosselComponent,
    CardModule,
    TopicsModule,
    ContactModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
