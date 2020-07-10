import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { IndexComponent } from "./containers/index/index.component";
import { StaticRoutingModule } from "./static-routing.module";
import { MatButtonModule } from "@angular/material/button";
import { NotFoundComponent } from "./containers/notfound/not-found.component";
import { MatMenuModule } from "@angular/material/menu";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AboutSite } from "./sites/about/about.site";

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
  declarations: [IndexComponent, NotFoundComponent, AboutSite],
  exports: [],
})
export class StaticModule {}
