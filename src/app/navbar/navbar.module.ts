import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, RouterModule, CoreModule],
  declarations: [],
  exports: [],
})
export class NavbarModule {}
