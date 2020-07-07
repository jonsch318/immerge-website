import { Direction } from "@angular/cdk/bidi";
import { ScrollStrategy } from "@angular/cdk/overlay";
import { TemplateRef } from "@angular/core";

export interface DropdownPanel {
  Direction: Direction;
  ScrollStrategy: ScrollStrategy;
  TemplateRef: TemplateRef<any>;

  startAnimation();
}
