import { NgModule } from "@angular/core";
import { NavbarComponent } from "./containers/navbar/navbar.component";
import { LogoComponent } from "./components/logo/logo.component";
import { HeaderMenuComponent } from "./containers/header-menu/header-menu.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { RouterModule } from "@angular/router";
import { IdentityComponent } from "./components/identity/identity.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { EqualWidthDirective } from './directives/equal-width.directive';

@NgModule({
  imports: [RouterModule, MatButtonModule, MatIconModule],
  declarations: [
    NavbarComponent,
    LogoComponent,
    HeaderMenuComponent,
    DropdownComponent,
    IdentityComponent,
    EqualWidthDirective,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
