import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { EconSliderComponent } from './econ-slider/econ-slider.component';
import { BusPubLibComponent } from './bus-pub-lib.component';
import {EconMathDirective} from './econ-math.directive';
import { EconHighlightDirective } from './econ-highlight.directive';




@NgModule({
  declarations: [
    BusPubLibComponent,
    EconSliderComponent,
    EconMathDirective,
    EconHighlightDirective
  ],
  imports: [
    MatSliderModule
  ],
  exports: [
    BusPubLibComponent,
    EconSliderComponent,
    EconHighlightDirective,
    EconMathDirective
  ]
})
export class BusPubLibModule { }
