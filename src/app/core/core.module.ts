import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./containers/app/app.component";
import { NavbarComponent } from "./containers/navbar/navbar.component";

@NgModule({
    imports: [CommonModule, RouterModule],
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
