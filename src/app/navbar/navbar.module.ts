import { NgModule } from "@angular/core";
import { NavbarComponent } from "./containers/navbar/navbar.component";
import { LogoComponent } from "./components/logo/logo.component";
import { HeaderMenuComponent } from "./containers/header-menu/header-menu.component";
import { LinkComponent } from "./components/link/link.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { RouterModule } from "@angular/router";
import { IdentityComponent } from "./components/identity/identity.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [RouterModule, MatButtonModule],
  declarations: [
    NavbarComponent,
    LogoComponent,
    HeaderMenuComponent,
    LinkComponent,
    DropdownComponent,
    IdentityComponent,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
