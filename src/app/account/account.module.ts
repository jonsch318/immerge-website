import { NgModule } from "@angular/core";
import { AccountRoutingModule } from "./account-routing.module";
import { SigninSite } from "./site/signin/signin.site";

@NgModule({ imports: [AccountRoutingModule], declarations: [SigninSite] })
export class AccountModule {}
