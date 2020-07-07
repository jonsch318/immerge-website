import { Directive, ElementRef, Input, ViewContainerRef } from "@angular/core";
import { DropdownPanel } from "./dropdown-panel";
import {
  FlexibleConnectedPositionStrategy,
  HorizontalConnectionPos,
  Overlay,
  OverlayConfig,
  OverlayRef,
  VerticalConnectionPos,
} from "@angular/cdk/overlay";
import { TemplatePortal } from "@angular/cdk/portal";
import { Subscription, merge, Observable } from "rxjs";

@Directive({
  selector: "[dropdownTriggerFor]",
  host: {
    "(click)": "openDropdown()",
    "(mouseenter)": "_handleMouseEnter()",
  },
})
export class DropdownTrigger {
  private _dropdown: DropdownPanel;
  private _overlayRef: OverlayRef;
  private _portal: TemplatePortal;
  private _closeSubscription = Subscription.EMPTY;
  private _closingActionSubscription = Subscription.EMPTY;

  @Input("dropdownTriggerFor")
  get dropdown() {
    return this._dropdown;
  }
  set dropdown(dropdown) {
    if (this._dropdown === dropdown) {
      return;
    }
    this._dropdown = dropdown;

    this._closeSubscription = dropdown.close.asObservable().subscribe((type) => {
      this._disposeDropdown();
    });
  }

  @Input("openDropdownOnHover")
  openDropdownOnHover: boolean = true;

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private _overlay: Overlay,
    private _viewContainerRef: ViewContainerRef,
  ) {}

  _handleMouseEnter() {
    if (this.openDropdownOnHover) {
      this.openDropdown();
    }
  }

  openDropdown() {
    const overlayRef = this._createOverlay();

    const overlayConfig = overlayRef.getConfig();

    this._setPosition(
      overlayConfig.positionStrategy as FlexibleConnectedPositionStrategy,
    );

    overlayRef.attach(this._getPortal());
    this._dropdown.startAnimation();

    this._closingActionSubscription = this._menuClosingActions().subscribe(() => {
      this.closeDropdown();
    });
  }

  closeDropdown() {
    this._overlayRef.dispose();
    this._overlayRef = null;
  }

  private _disposeDropdown() {
    const dropdown = this.dropdown;
  }

  private _menuClosingActions(): Observable<any> {
    const backdrop = this._overlayRef.backdropClick();
    const detachments = this._overlayRef.detachments();
    return merge(backdrop, detachments);
  }

  private _getOverlayConfig(): OverlayConfig {
    return new OverlayConfig({
      positionStrategy: this._overlay
        .position()
        .flexibleConnectedTo(this._elementRef)
        .withLockedPosition()
        .withTransformOriginOn("im-dropdown-panel"),
      hasBackdrop: false,
      backdropClass: "im-dropdown-backdrop",
      direction: this._dropdown.direction,
      panelClass: "im-dropdown-panel",
      scrollStrategy: this._dropdown.scrollStrategy,
    });
  }

  private _createOverlay(): OverlayRef {
    const config = this._getOverlayConfig();
    this._overlayRef = this._overlay.create(config);
    return this._overlayRef;
  }

  private _setDropdownStatus(isOpen: boolean) {}

  private _getPortal(): TemplatePortal {
    if (!this._portal || this._portal.templateRef !== this._dropdown.templateRef) {
      this._portal = new TemplatePortal(
        this._dropdown.templateRef,
        this._viewContainerRef,
      );
    }
    return this._portal;
  }

  private _setPosition(positionStrategy: FlexibleConnectedPositionStrategy) {
    const [originX, originFallbackX]: HorizontalConnectionPos[] = ["start", "end"];
    const [originY, originFallbackY]: VerticalConnectionPos[] = ["bottom", "top"];
    const [overlayX, overlayFallbackX]: HorizontalConnectionPos[] = ["start", "end"];
    const [overlayY, overlayFallbackY]: VerticalConnectionPos[] = ["top", "bottom"];

    const offsetY = 10;

    positionStrategy
      .withPositions([
        {
          originX,
          originY,
          overlayX,
          overlayY,
        },
        {
          originX,
          originY,
          overlayX: overlayFallbackX,
          overlayY,
        },
      ])
      .withPush();
  }
}
