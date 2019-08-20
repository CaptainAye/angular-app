import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSpaceImage]'
})
export class SpaceImageDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mousemove') zoomPhoto() {
    this.zoom += 0.005;
  }

  @HostListener('mouseout') unzoomPhoto() {
    this.zoom = 1;
  }

  set zoom(value: number) {
    this.element.nativeElement.style.zoom = value;
  }

  get zoom(): number {
    return parseFloat(this.element.nativeElement.style.zoom);
  }

}
