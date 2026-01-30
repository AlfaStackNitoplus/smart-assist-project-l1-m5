import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInteractiveRow]'
})
export class InteractiveRow {
  // ✅ Bind class to host element
  @HostBinding('class.row-hover')
  isHovered = false;

  @HostBinding('class.row-selected')
  isSelected = false;

  constructor(
    private el: ElementRef<HTMLTableRowElement>,
    private renderer: Renderer2
  ) { }

  // ✅ Listen to mouse enter
  @HostListener('mouseenter')
  onMouseEnter() {
    this.isHovered = true;
  }

  // ✅ Listen to mouse leave
  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHovered = false;
  }

  // ✅ Listen to click
  @HostListener('click')
  onClick() {
    this.isSelected = !this.isSelected;

    // Safe DOM access via Renderer2
    this.renderer.setAttribute(
      this.el.nativeElement,
      'data-selected',
      String(this.isSelected)
    );
  }

}
