import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appParallax]',
  standalone: true,
})
export class ParallaxDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2) { }

  @HostListener('window:wheel', ['$event'])
  onWindowScroll() {
    this.applyParallax();
  }

  applyParallax() {
    const element = this.el.nativeElement;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const inView = rect.top + rect.height > 0 && rect.top < windowHeight;

    if (inView) {
      const percentage = (rect.top / windowHeight) * 100;
      const offset = -((percentage / 100) * 60); // Adjust the multiplier for desired effect
      this.renderer.setStyle(element, 'transform', `translate3d(0, ${offset}px, 0)`);
    } else {
      this.renderer.removeStyle(element, 'transform');
    }
  }
}
