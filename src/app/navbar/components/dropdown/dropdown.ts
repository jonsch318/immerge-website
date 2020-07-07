import {
  Component,
  EventEmitter,
  HostListener,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { DropdownPanel } from "./dropdown-panel";
import { Direction } from "@angular/cdk/bidi";
import { Overlay, ScrollStrategy } from "@angular/cdk/overlay";

@Component({
  selector: "nav-dropdown",
  templateUrl: "./dropdown.html",
  styleUrls: ["./dropdown.scss"],
})
export class Dropdown implements DropdownPanel {
  direction: Direction;
  scrollStrategy: ScrollStrategy;
  openOnHover: boolean;
  trigger: HTMLElement;
  close: EventEmitter<void | "click" | "keydown" | "tab">;

  @ViewChild(TemplateRef)
  templateRef: TemplateRef<any>;

  constructor(private _overlay: Overlay) {
    this.scrollStrategy = this._overlay.scrollStrategies.block();
  }

  startAnimation() {}

  mouseleave($event) {
    const target = $event.toElement as HTMLElement;
    if (!(target === this.trigger)) {
    }
  }
}
