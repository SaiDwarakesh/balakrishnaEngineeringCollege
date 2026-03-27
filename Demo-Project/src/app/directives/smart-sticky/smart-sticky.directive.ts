import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[sticky]',
  standalone: true
})
export class SmartStickyDirective {
  @Input('sticky') index: number = 0;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.renderer.addClass(this.el.nativeElement, 'sticky');
    this.renderer.addClass(this.el.nativeElement, 'z-[4]');
    this.renderer.addClass(this.el.nativeElement, 'min-w-40');
    this.renderer.addClass(this.el.nativeElement, 'max-w-40');
    this.renderer.addClass(this.el.nativeElement, 'left-'+`${this.index * 40}`);
  }

}
