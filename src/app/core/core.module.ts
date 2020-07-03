import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./containers/app/app.component";
import { NavbarComponent } from "./containers/navbar/navbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { LogoComponent } from "./components/logo/logo.component";
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';

@NgModule({
    imports: [CommonModule, RouterModule, MatToolbarModule],
    declarations: [AppComponent, NavbarComponent, LogoComponent, HeaderMenuComponent],
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
