import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";
import { AppComponent } from "./core/containers/app/app.component";
import { StaticModule } from "./static/static.module";

@NgModule({
    declarations: [],
    imports: [BrowserModule, AppRoutingModule, CoreModule.forRoot(), StaticModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
