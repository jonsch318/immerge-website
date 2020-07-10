import { DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { DropdownComponent } from "./components/dropdown/dropdown";
import { NavIdentityComponent } from "./components/identity/identity";
import { NavLogoComponent } from "./components/logo/logo";
import { NavLinkComponent } from "./components/nav-link/nav-link";
import { HamburgerComponent } from "./containers/hamburger/hamburger";
import { HeaderMenuLargeComponent } from "./containers/header-menu-lg/header-menu-lg";
import { HeaderMenuSmallComponent } from "./containers/header-menu-sm/header-menu-sm";
import { MainNavbar } from "./containers/navbar/navbar";
import { ProjectsLarge } from "./dropdowns/projects/projects-lg";
import { ProjectsSmall } from "./dropdowns/projects/projects-sm";

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
    MatMenuModule,
  ],
  declarations: [
    MainNavbar,
    NavLogoComponent,
    HamburgerComponent,
    HeaderMenuSmallComponent,
    NavIdentityComponent,
    HeaderMenuLargeComponent,
    ProjectsSmall,
    NavLinkComponent,
    ProjectsLarge,
    DropdownComponent,
  ],
  exports: [MainNavbar],
})
export class NavbarModule {}
