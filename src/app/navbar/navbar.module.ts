import { NgModule } from "@angular/core";
import { NavbarComponent } from "./containers/navbar/navbar.component";
import { LogoComponent } from "./components/logo/logo.component";
import { HeaderMenuComponent } from "./containers/header-menu/header-menu.component";
import { LinkComponent } from "./components/link/link.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";

@NgModule({
  imports: [],
  declarations: [NavbarComponent, LogoComponent, HeaderMenuComponent, LinkComponent, DropdownComponent],
  exports: [NavbarComponent],
})
export class NavbarModule {}
