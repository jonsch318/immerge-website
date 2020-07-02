import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./containers/app/app.component";
import { NavbarComponent } from "./containers/navbar/navbar.component";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
    imports: [CommonModule, RouterModule, MatToolbarModule],
    declarations: [AppComponent, NavbarComponent],
    exports: [],
})
export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [],
        };
    }
}
