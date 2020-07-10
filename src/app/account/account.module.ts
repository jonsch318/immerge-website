import { NgModule } from "@angular/core";
import { SigninSite } from "./site/signin/signin.site";
import { AccountRoutingModule } from "./account-routing.module";

@NgModule({ imports: [AccountRoutingModule], declarations: [SigninSite] })
export class AccountModule {}
