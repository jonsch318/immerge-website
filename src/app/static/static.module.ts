import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { IndexComponent } from "./containers/index/index.component";
import { NotFoundComponent } from "./containers/notfound/not-found.component";
import { AboutSite } from "./sites/about/about.site";
import { StaticRoutingModule } from "./static-routing.module";

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
