import { Injectable, NgModule } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import {
  BrowserModule,
  HammerGestureConfig,
  HammerModule,
  HAMMER_GESTURE_CONFIG,
} from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import * as Hammer from "hammerjs";
import { AccountModule } from "./account/account.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { NavbarModule } from "./navbar/navbar.module";
import { SharedModule } from "./shared/shared.module";
import { StaticModule } from "./static/static.module";

// custom configuration Hammerjs
@Injectable()
export class HammerConfig extends HammerGestureConfig {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  overrides = <any>{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
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
    HammerModule,
    AccountModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
