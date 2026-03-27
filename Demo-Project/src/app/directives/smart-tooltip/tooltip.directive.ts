import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

type positions = 'above' | 'below' | 'before' | 'after'

@Directive({
  selector: '[smartTooltip]',
  standalone: true
})
export class SmartTooltip {

  @Input('smartTooltip') tooltipText: string = '';
  @Input() position : positions = 'below';
  @Input() disableTooltip : true | false = false;
  @Input() isOverflowEnable:boolean=false;
  @Input() textalign:string='text-center';
  tooltipElement : HTMLElement | null = null ;

  classList =[
    'bg-light',
    'text-gray-700',
    'border',
    'border-primary',
    'text-sm',
    'z-[1000]',
    'absolute',
    'px-2',
    'py-1',
    'rounded-md',
    'pointer-events-none',
    'max-w-72',
    'text-center',
    'dark:bg-dr-light',
    'dark:text-dr-gray-700',
    'dark:border-dr-primary'
  ]

  arrowTop = [
    "before:content-['']",
    "before:absolute",
    "before:top-0",
    "before:left-1/2",
    "before:-translate-x-1/2",
    "before:-translate-y-full",
    "before:border",
    "before:border-solid",
    "before:border-x-[6px]",
    "before:border-b-[6px]",
    "before:border-t-transparent",
    "before:border-r-transparent",
    "before:border-b-primary",
    "before:border-l-transparent",
    "after:content-['']",
    "after:absolute",
    "after:top-0",
    "after:left-1/2",
    "after:-translate-x-1/2",
    "after:-translate-y-full",
    "after:border",
    "after:border-solid",
    "after:border-x-[5px]",
    "after:border-b-[5px]",
    "after:border-r-transparent",
    "after:border-t-transparent",
    "after:border-b-light",
    "after:border-l-transparent",
    "dark:after:border-b-dr-light",
    "dark:before:border-b-dr-primary",
  ]

  arrowBelow =[
    "before:content-['']",
    "before:absolute",
    "before:bottom-0",
    "before:left-1/2",
    "before:-translate-x-1/2",
    "before:translate-y-full",
    "before:border",
    "before:border-solid",
    "before:border-x-[6px]",
    "before:border-t-[6px]",
    "before:border-t-primary",
    "dark:before:border-t-dr-primary",
    "before:border-r-transparent",
    "before:border-b-transparent",
    "before:border-l-transparent",
    "after:content-['']",
    "after:absolute",
    "after:bottom-0",
    "after:left-1/2",
    "after:-translate-x-1/2",
    "after:translate-y-full",
    "after:border",
    "after:border-solid",
    "after:border-x-[5px]",
    "after:border-t-[5px]",
    "after:border-r-transparent",
    "after:border-t-light",
    "dark:after:border-t-dr-light",
    "after:border-b-transparent",
    "after:border-l-transparent"
  ]

  arrowRight = [
    "before:content-['']",
    "before:absolute",
    "before:right-0",
    "before:top-1/2",
    "before:translate-x-full",
    "before:-translate-y-1/2",
    "before:border",
    "before:border-solid",
    "before:border-y-[6px]",
    "before:border-l-[6px]",
    "before:border-t-transparent",
    "before:border-r-transparent",
    "before:border-b-transparent",
    "before:border-l-primary",
    "dark:before:border-l-dr-primary",
    "after:content-['']",
    "after:absolute",
    "after:right-0",
    "after:top-1/2",
    "after:translate-x-full",
    "after:-translate-y-1/2",
    "after:border",
    "after:border-solid",
    "after:border-y-[5px]",
    "after:border-l-[5px]",
    "after:border-r-transparent",
    "after:border-t-transparent",
    "after:border-b-transparent",
    "after:border-l-light",
    "dark:after:border-l-dr-light"
  ]

  arrowLeft = [
    "before:content-['']",
    "before:absolute",
    "before:left-0",
    "before:top-1/2",
    "before:-translate-x-full",
    "before:-translate-y-1/2",
    "before:border",
    "before:border-solid",
    "before:border-y-[6px]",
    "before:border-r-[6px]",
    "before:border-t-transparent",
    "before:border-r-primary",
    "dark:before:border-r-dr-primary",
    "before:border-b-transparent",
    "before:border-l-transparent",
    "after:content-['']",
    "after:absolute",
    "after:left-0",
    "after:top-1/2",
    "after:-translate-x-full",
    "after:-translate-y-1/2",
    "after:border",
    "after:border-solid",
    "after:border-y-[5px]",
    "after:border-r-[5px]",
    "after:border-r-light",
    "dark:after:border-r-dr-light",
    "after:border-t-transparent",
    "after:border-b-transparent",
    "after:border-l-transparent"
  ]
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltipElement && this.tooltipText && !this.disableTooltip) {
      if(this.isOverflowEnable){
        if(this.el.nativeElement.scrollWidth > this.el.nativeElement.clientWidth){
          this.createTooltip();
        }
      }
      else{
      this.createTooltip();
    }
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.destroyTooltip();
  }

  ngOnDestroy() {
    this.destroyTooltip();
  }

  createTooltip() {
    let position = this.position
    this.tooltipElement = this.renderer.createElement('div');
    if(this.tooltipElement){
      this.tooltipElement.innerText = this.tooltipText;
        if(this.textalign!='text-center'){
        this.classList = this.classList.filter(className => className !== 'text-center');
        this.classList.push(this.textalign)
      }
      this.classList.forEach(cls => this.renderer.addClass(this.tooltipElement, cls));
      this.renderer.setStyle(this.tooltipElement, 'wordWrap', 'break-word');
      this.renderer.setStyle(this.tooltipElement, 'whiteSpace', 'normal');
      this.renderer.setStyle(this.tooltipElement, 'boxSizing', 'border-box');
      this.renderer.setStyle(this.tooltipElement, 'position', 'fixed'); // Important for viewport-relative placement


      // Append tooltip to the body
      this.renderer.appendChild(document.body, this.tooltipElement);
      this.renderer.setStyle(this.tooltipElement, 'top', `${0}px`);

      // Get element dimensions and position
      const rect = this.el.nativeElement.getBoundingClientRect();
      const tooltipRect = this.tooltipElement.getBoundingClientRect();

      // Calculate position to align the tooltip
      let top, left, bottom ,right

      if(position == 'below'){
        top = rect.bottom + 8 ;
        left = rect.left + rect.width / 2 - tooltipRect.width / 2;

        if(top > window.innerHeight - tooltipRect.height){
          position = 'above';
        }

        if(left >= window.innerWidth - tooltipRect.width){
          position = 'before';
        }
      }

      if(position == 'above') {
        bottom = window.innerHeight - (rect.top - 8);
        left = rect.left + rect.width / 2 - tooltipRect.width / 2;

        if(bottom > window.innerHeight - 8 -tooltipRect.height ){
          position = 'below';
          top = rect.bottom + 8 ;
          left = rect.left + rect.width / 2 - tooltipRect.width / 2;
        }

        if(left >= window.innerWidth - tooltipRect.width){
          position = 'before';
        }
      }

      if(position == 'after'){
        top = rect.top - ((tooltipRect.height - rect.height)/2);
        left = rect.right + 8;

        if(left >= window.innerWidth - tooltipRect.width){
          position = 'before';
        }
      }

      if(position == 'before'){
        top = rect.top - ((tooltipRect.height - rect.height)/2)
        right = window.innerWidth - (rect.left - 8);
      }

      switch(position) {
        case 'below': {
          this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
          this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
          this.arrowTop.forEach(cls => this.renderer.addClass(this.tooltipElement, cls));
          break;
        }

        case 'above':{
          this.renderer.setStyle(this.tooltipElement, 'bottom', `${bottom}px`);
          this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
          this.renderer.removeStyle(this.tooltipElement, 'top');
          this.arrowBelow.forEach(cls => this.renderer.addClass(this.tooltipElement, cls));
          break;
        }

        case 'before':{
          this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
          this.renderer.setStyle(this.tooltipElement, 'right', `${right}px`);
          this.arrowRight.forEach(cls => this.renderer.addClass(this.tooltipElement, cls));
          break;
        }

        case 'after':{
          this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
          this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
          this.arrowLeft.forEach(cls => this.renderer.addClass(this.tooltipElement, cls));
          break;
        }
      }
    }
  }

  destroyTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}
