import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { NotFoundComponent } from "./containers/notfound/not-found.component";
import { StaticRoutingModule } from "./static-routing.module";
import { IndexPage } from "./pages/index/index.page";
import { AboutPage } from "./pages/about/about.page";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    StaticRoutingModule,
    CoreModule,
    MatButtonModule,
    MatMenuModule,
  ],
  declarations: [IndexPage, NotFoundComponent, AboutPage],
  exports: [],
})
export class StaticModule { }
