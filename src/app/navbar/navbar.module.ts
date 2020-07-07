import { NgModule } from "@angular/core";
import { NavbarComponent } from "./containers/navbar/navbar.component";
import { LogoComponent } from "./components/logo/logo.component";
import { HeaderMenuComponent } from "./containers/header-menu/header-menu.component";
import { RouterModule } from "@angular/router";
import { IdentityComponent } from "./components/identity/identity.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { EqualWidthDirective } from "./directives/equal-width.directive";
import { CommonModule } from "@angular/common";
import { MatMenuModule } from "@angular/material/menu";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DropdownComponent } from "./components/dropdown/dropdown.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  declarations: [
    NavbarComponent,
    LogoComponent,
    HeaderMenuComponent,
    IdentityComponent,
    EqualWidthDirective,
    DropdownComponent,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
