import { Component, EventEmitter, Input, Output } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";
import { mergeMap } from "rxjs/operators";

@Component({
  selector: "nav-header-menu-sm",
  templateUrl: "./nav-header-menu-sm.html",
  styleUrls: ["./header-menu-sm.scss"],
})
export class HeaderMenuSmallComponent {
  @Input()
  isOpen: Observable<boolean>;

  @Output()
  close: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _router: Router) {}
}
