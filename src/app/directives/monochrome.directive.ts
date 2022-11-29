import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMonochrome]',
})
export class MonochromeDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setMonochromeFilter(100);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setMonochromeFilter(0);
  }

  setMonochromeFilter(val: number): void {
    this.el.nativeElement.style.filter = `grayscale(${val}%)`;
  }
}
