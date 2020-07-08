import { Component, ElementRef, EventEmitter, Input, Output } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "nav-hamburger",
  templateUrl: "./hamburger.html",
  styleUrls: ["./hamburger.scss"],
})
export class HamburgerComponent {
  open = false;
  icon: BehaviorSubject<string> = new BehaviorSubject<string>("menu");

  @Output()
  menuState: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  handleClick(): void {
    this.open = !this.open;
    this.menuState.emit(this.open);
    this.getIcon();
  }

  getIcon(): void {
    this.icon.next(this.open ? "close" : "menu");
  }
}
