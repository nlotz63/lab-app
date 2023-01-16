import { Directive, OnChanges, OnInit, Input, ElementRef, OnDestroy, SimpleChanges } from "@angular/core";
import { Subject} from "rxjs";
import { EconMathService } from "./econ-math.service";
import { take, takeUntil } from "rxjs/operators";

declare var MathJax: any;

@Directive({
  selector: '[econMath]',
})
export class EconMathDirective implements OnChanges {
  @Input('econMath') public econMath: string = '';

  private alive$ = new Subject<boolean>();
  private readonly el: HTMLElement;

  constructor(private mathService: EconMathService, private elementRef: ElementRef) {
    this.el = elementRef.nativeElement;
  }

  ngOnInit() {
    this.render();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes['econMath'] && changes['econMath'].currentValue ) {
    this.render();
    }
  }

  private render() {
    this.mathService.ready().pipe(
      take(1),
      takeUntil(this.alive$)
    ).subscribe(() => this.mathService.render(this.el, this.econMath));
  }

  ngOnDestroy() {
    this.alive$.next(false);
  }

}
