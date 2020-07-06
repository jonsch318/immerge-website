import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
  selector: "[equalWidth]",
})
export class EqualWidthDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  @Input()
  equalWidth: HTMLElement;

  ngOnInit() {
    this.elementRef.nativeElement.style.width =
      this.equalWidth.getBoundingClientRect().width + "px";
  }
}
