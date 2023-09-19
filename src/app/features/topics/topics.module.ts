import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsComponent } from '../topics/topics.component';



@NgModule({
  declarations: [
    TopicsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopicsComponent
  ]
})
export class TopicsModule { }