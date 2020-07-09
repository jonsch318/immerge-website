import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { MainNavbar } from "./containers/navbar/navbar";
import { NavLogoComponent } from "./components/logo/logo";
import { HamburgerComponent } from "./containers/hamburger/hamburger";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { HeaderMenuSmallComponent } from "./containers/header-menu-sm/header-menu-sm";
import { NavIdentityComponent } from "./components/identity/identity";
import { HeaderMenuLargeComponent } from "./containers/header-menu-lg/header-menu-lg";
import { MatDividerModule } from "@angular/material/divider";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { DropdownSmall } from "./components/dropdown-sm/dropdown-sm";
import { ProjectsSmall } from "./dropdowns/projects/projects-sm";
import { MatRippleModule } from "@angular/material/core";
import { NavLinkComponent } from "./components/nav-link/nav-link";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    CoreModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    DragDropModule,
    MatRippleModule,
  ],
  declarations: [
    MainNavbar,
    NavLogoComponent,
    HamburgerComponent,
    HeaderMenuSmallComponent,
    NavIdentityComponent,
    HeaderMenuLargeComponent,
    DropdownSmall,
    ProjectsSmall,
    NavLinkComponent,
  ],
  exports: [MainNavbar],
})
export class NavbarModule {}
