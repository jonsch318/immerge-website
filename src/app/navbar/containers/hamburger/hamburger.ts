import { Component, EventEmitter, Output, ViewChild } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HeaderMenuSmallComponent } from "../header-menu-sm/header-menu-sm";
import { menuAnimations } from "./hamburger-menu-animations";

@Component({
  selector: "nav-hamburger",
  templateUrl: "./hamburger.html",
  styleUrls: ["./hamburger.scss"],
  animations: [menuAnimations.transformMenu],
})
export class HamburgerComponent {
  open = false;
  icon: BehaviorSubject<string> = new BehaviorSubject<string>("menu");
  _animationState: "void" | "enter" = "void";

  @Output()
  menuState: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild("menu", { static: false })
  menu: HeaderMenuSmallComponent;

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
