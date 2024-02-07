import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AboutusComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AboutusModule { }
