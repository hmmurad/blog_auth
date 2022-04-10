import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private vcf: ViewContainerRef,
    private tref: TemplateRef<any>
  ) {}

  @HostListener('mouseenter') onmouseenter(event: Event) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
  }
  @HostListener('mouseleave') onmouseleave(event: Event) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
  }
}
