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
    this._setMenuState(!this.open);
  }

  getIcon(): void {
    this.icon.next(this.open ? "close" : "menu");
  }
  closeMenu(): void {
    this._setMenuState(false);
  }

  private _setMenuState(state: boolean): void {
    this.open = state;
    this.menuState.emit(this.open);
    this.getIcon();
  }
}
