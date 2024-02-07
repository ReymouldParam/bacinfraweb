import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  exports: [
    CarouselModule,
    BrowserAnimationsModule,
    MatIconModule
  ]
})
export class SharedModule { } 
