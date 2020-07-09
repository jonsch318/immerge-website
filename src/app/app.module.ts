import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";
import { AppComponent } from "./app.component";
import { StaticModule } from "./static/static.module";
import { SharedModule } from "./shared/shared.module";
import { NavbarModule } from "./navbar/navbar.module";
import { MatMenuModule } from "@angular/material/menu";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import * as Hammer from "hammerjs";
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";

export class MyHammerConfig extends HammerGestureConfig {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  overrides = <any>{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    StaticModule,
    SharedModule,
    NavbarModule,
    MatMenuModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
