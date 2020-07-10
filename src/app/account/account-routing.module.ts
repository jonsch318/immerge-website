import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninSite } from "./site/signin/signin.site";

const routes: Routes = [
  {
    path: "signin",
    component: SigninSite,
    data: { title: "Sign in to Immerge" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
