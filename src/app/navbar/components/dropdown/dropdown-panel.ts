import { Direction } from "@angular/cdk/bidi";
import { ScrollStrategy } from "@angular/cdk/overlay";
import { EventEmitter, TemplateRef } from "@angular/core";

export interface DropdownPanel {
  scrollStrategy: ScrollStrategy;
  templateRef: TemplateRef<any>;
  openOnHover: boolean;
  trigger: HTMLElement;
  close: EventEmitter<void | "click" | "keydown" | "tab">;
  direction?: Direction;

  startAnimation();
}
