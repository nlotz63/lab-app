import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { EconSliderComponent } from './econ-slider/econ-slider.component';
import { BusPubLibComponent } from './bus-pub-lib.component';



@NgModule({
  declarations: [
    BusPubLibComponent,
    EconSliderComponent
  ],
  imports: [
    MatSliderModule
  ],
  exports: [
    BusPubLibComponent,
    EconSliderComponent
  ]
})
export class BusPubLibModule { }
