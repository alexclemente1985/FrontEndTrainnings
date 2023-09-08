import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AluraPlayContentComponent } from './containers/alura-play-content/alura-play-content.component';
import { SuperiorSectionComponent } from './components/superior-section/superior-section.component';
import { VideoSectionComponent } from './components/video-section/video-section.component';



@NgModule({
  declarations: [
    AluraPlayContentComponent,
    SuperiorSectionComponent,
    VideoSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AluraPlayContentComponent
  ]
})
export class AluraPlayContentModule { }
