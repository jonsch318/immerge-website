import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { IndexComponent } from "./containers/index/index.component";
import { StaticRoutingModule } from "./static-routing.module";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [CommonModule, RouterModule, StaticRoutingModule, CoreModule, MatButtonModule],
    declarations: [IndexComponent],
    exports: [],
})
export class StaticModule {}
