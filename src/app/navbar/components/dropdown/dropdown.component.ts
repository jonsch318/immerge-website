import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  NgZone,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import {
  MAT_MENU_DEFAULT_OPTIONS,
  MAT_MENU_PANEL,
  MatMenu,
  matMenuAnimations,
  MatMenuDefaultOptions,
} from "@angular/material/menu";

@Component({
  selector: "nav-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: "dropdown",
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
  }

  ngOnInit(): void {}
}
