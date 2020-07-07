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

@Directive({
  selector: "[dropdownTriggerFor]",
  host: {
    "(click)": "openDropdown()",
  },
})
export class DropdownTrigger {
  private _dropdown: DropdownPanel;
  private _overlayRef: OverlayRef;
  private _portal: TemplatePortal;

  @Input("dropdownTriggerFor")
  get dropdown() {
    return this._dropdown;
  }
  set dropdown(dropdown) {
    if (this._dropdown === dropdown) {
      return;
    }
    this._dropdown = dropdown;
  }

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private _overlay: Overlay,
    private _viewContainerRef: ViewContainerRef,
  ) {}

  openDropdown() {
    const overlayRef = this._createOverlay();

    const overlayConfig = overlayRef.getConfig();

    this._setPosition(
      overlayConfig.positionStrategy as FlexibleConnectedPositionStrategy,
    );

    overlayRef.attach(this._getPortal());
    this._dropdown.startAnimation();

    this._overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
      console.log("Clicked backdrop");
    });
  }

  closeDropdown() {
    this._overlayRef.dispose();
    this._overlayRef = null;
  }

  private _getOverlayConfig(): OverlayConfig {
    return new OverlayConfig({
      positionStrategy: this._overlay
        .position()
        .flexibleConnectedTo(this._elementRef)
        .withLockedPosition()
        .withTransformOriginOn("im-dropdown-panel"),
      hasBackdrop: true,
      backdropClass: "im-dropdown-backdrop",
      direction: this._dropdown.Direction,
      panelClass: "im-dropdown-panel",
      scrollStrategy: this._dropdown.ScrollStrategy,
    });
  }

  private _createOverlay(): OverlayRef {
    const config = this._getOverlayConfig();
    this._overlayRef = this._overlay.create(config);
    return this._overlayRef;
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

  /** Gets the portal that should be attached to the overlay. */
  private _getPortal(): TemplatePortal {
    if (!this._portal || this._portal.templateRef !== this._dropdown.TemplateRef) {
      this._portal = new TemplatePortal(
        this._dropdown.TemplateRef,
        this._viewContainerRef,
      );
    }

    return this._portal;
  }
}
