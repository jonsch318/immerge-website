import { Component, TemplateRef, ViewChild } from "@angular/core";
import { DropdownPanel } from "./dropdown-panel";
import { Direction } from "@angular/cdk/bidi";
import { Overlay, ScrollStrategy } from "@angular/cdk/overlay";

@Component({
  selector: "nav-dropdown",
  templateUrl: "./dropdown.html",
  styleUrls: ["./dropdown.scss"],
})
export class Dropdown implements DropdownPanel {
  Direction: Direction;
  ScrollStrategy: ScrollStrategy;

  @ViewChild(TemplateRef)
  TemplateRef: TemplateRef<any>;

  constructor(private _overlay: Overlay) {
    this.ScrollStrategy = this._overlay.scrollStrategies.block();
  }

  startAnimation() {}
}
