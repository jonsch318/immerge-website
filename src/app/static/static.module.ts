import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { NotFoundComponent } from "./containers/notfound/not-found.component";
import { AboutPage } from "./pages/about/about.page";
import { IndexPage } from "./pages/index/index.page";
import { StaticRoutingModule } from "./static-routing.module";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    StaticRoutingModule,
    CoreModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  declarations: [IndexPage, NotFoundComponent, AboutPage],
  exports: [],
})
export class StaticModule {}
