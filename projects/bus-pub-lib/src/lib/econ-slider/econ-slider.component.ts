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

  @Output() dragStart = new EventEmitter();
  @Output() dragEnd = new EventEmitter();
  @Output() valueChange = new EventEmitter();
  @Output() econChange = new EventEmitter();



  constructor() { }

  ngOnInit() {
    let initialValue = Number(this.value);
    this.newValueChange();  
  }

  newValueChange() {
    this.valueChange.emit(this.value);
    const timer = setTimeout(() => {
      if (this.showPercent) {
          this.sliderPercent(this.value);
      } else if (this.units !== '' && this.displayValue === '') {
        this.valueText = `${this.value} ${this.units}`;
      } else  {
        this.valueText = `${this.displayValue} ${this.units}`;
      }
      }, 25);
  }

  newDragEnd(event: any) {
    this.dragEnd.emit(event);
  }

  newDragStart(event: any) {
    this.dragStart.emit(event);
  }

  newChange() {
    this.econChange.emit(this.value);
 }

  sliderPercent(event: any) {
    let min = Number(this.min);
    let max = Number(this.max);
    let value = Number(event);
      this.valueText = `${((value - min) / (max - min) * 100).toFixed(1)} percent`;

      }


}
