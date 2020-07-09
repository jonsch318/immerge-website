import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "nav-header-menu-sm",
  templateUrl: "./nav-header-menu-sm.html",
  styleUrls: ["./header-menu-sm.scss"],
})
export class HeaderMenuSmallComponent implements OnInit, OnDestroy {
  private routerSubscription = Subscription.EMPTY;

  @Output()
  public close: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild("container", { static: false })
  containerRef: ElementRef;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.routerSubscription = this._router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.close.emit();
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  handleContainerClick($event: MouseEvent): void {
    if ($event.target === this.containerRef.nativeElement) this.close.emit();
  }
}
