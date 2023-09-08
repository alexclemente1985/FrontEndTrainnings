import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AluraPlayContentModule } from './features/alura-play-content/alura-play-content.module';
import { AluraPlayHeaderModule } from './features/alura-play-header/alura-play-header.module';
import { AluraPlayFooterModule } from './features/alura-play-footer/alura-play-footer.module';
import { SideMenuModule } from './features/side-menu/side-menu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AluraPlayHeaderModule,
    SideMenuModule,
    AluraPlayContentModule,
    AluraPlayFooterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
