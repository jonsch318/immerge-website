import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  InjectionToken,
  NgZone,
} from "@angular/core";
import { MAT_MENU_PANEL, MatMenu, MatMenuDefaultOptions } from "@angular/material/menu";
import { matMenuAnimations } from "./dropdown-animations";

/** Injection token to be used to override the default options for `mat-menu`. */
export const MAT_MENU_DEFAULT_OPTIONS = new InjectionToken<MatMenuDefaultOptions>(
  "mat-menu-default-options",
  {
    providedIn: "root",
    factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY,
  },
);

export function MAT_MENU_DEFAULT_OPTIONS_FACTORY(): MatMenuDefaultOptions {
  return {
    overlapTrigger: false,
    xPosition: "after",
    yPosition: "below",
    backdropClass: "cdk-overlay-transparent-backdrop",
  };
}

@Component({
  selector: "nav-dropdown",
  templateUrl: "./dropdown.html",
  styleUrls: ["./dropdown.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems],
  providers: [
    { provide: MAT_MENU_PANEL, useExisting: MatMenu },
    { provide: MatMenu, useExisting: DropdownComponent },
  ],
})
export class DropdownComponent extends MatMenu {
  constructor(
    elementRef: ElementRef<HTMLElement>,
    ngZone: NgZone,
    @Inject(MAT_MENU_DEFAULT_OPTIONS) defaultOptions: MatMenuDefaultOptions,
  ) {
    super(elementRef, ngZone, defaultOptions);
    this.setElevation();
  }
}
