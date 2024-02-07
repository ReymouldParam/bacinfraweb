import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterLink
  ],
  exports: [
    CarouselModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterLink
  ]
})
export class SharedModule { } 
