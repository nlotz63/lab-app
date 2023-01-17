import { KeyValuePipe } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'econ-slider',
  templateUrl: './econ-slider.component.html',
  styleUrls: ['./econ-slider.component.css']
})
export class EconSliderComponent implements OnInit {

  @Input() min: number | string = 0;
  @Input() max: number | string = 100;
  @Input() step: number | string = 1;
  @Input() value: number | string = 50;
  @Input() showValue: string = '';
  @Input() label: string = '';
  @Input() displayValue: string | number = '';
  @Input() units: string = '';
  @Input() id = `econ-slider-${Math.random() * 10}`;
  @Input() valueText: string = '';
  @Input() showPercent: boolean = false;
  @Input() title: string = 'slider';

  @Output() change = new EventEmitter();
  @Output() input = new EventEmitter();



  constructor() { }

  ngOnInit() {
    let initialValue = Number(this.value);
    this.sliderPercent(initialValue);
  }

  newInput(value: any) {
    this.input.emit(value);
  }
  newChange(value: any) {
    this.change.emit(value);
  }
  sliderPercent(value: any) {
    let min = Number(this.min);
    let max = Number(this.max);
    if (this.showPercent) {
      if (value) {
       let sliderValue = typeof value === 'number' ? value:  value.target.value
        this.valueText = `${((sliderValue - min) / (max - min) * 100).toFixed(1)} percent`;
      }

    } else {
      return;
    }

 }

}
