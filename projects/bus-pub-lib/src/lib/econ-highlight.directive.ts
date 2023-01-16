import { Directive, OnChanges, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[econHighlight]'
})
export class EconHighlightDirective implements OnChanges {

  @Input('econHighlight') changeValue: number = 0;


  constructor(private el: ElementRef) {
  }

  ngOnChanges() {
    this.grabAttention();

  }
  private grabAttention() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
    setTimeout(() => {
      this.el.nativeElement.style.backgroundColor = 'white';
    }, 2000);

  }


}
