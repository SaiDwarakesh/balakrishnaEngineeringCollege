import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[SmartCell]',
  standalone: true
})
export class SmartCellDirective {

  @Input() inheritBackground:boolean = true;

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    
  }

  ngOnInit(){
    this.applyClasses();
  }

  private applyClasses() {
    const classes = ['border', 'border-gray-200', 'px-4', 'py-2', 'text-gray-800', 'text-sm', 'border-l-0','border-t-0',
      'dark:border-dr-gray-200', 'dark:text-dr-gray-700'];  // Your predefined classes
    classes.forEach(cls => this.renderer.addClass(this.el.nativeElement, cls));
    if(this.inheritBackground){
      this.renderer.addClass(this.el.nativeElement, 'bg-inherit')
    }
  }
}
