import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./containers/index/index.component";
import { NotFoundComponent } from "./containers/notfound/not-found.component";
import { AboutSite } from "./sites/about/about.site";
import { ContactSite } from "./sites/contact/contact.site";

export const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
  },
  {
    path: "about",
    component: AboutSite,
    data: {
      title: "About Immerge",
    },
  },
  {
    path: "contact",
    component: ContactSite,
    data: { title: "Contact Immerge" },
  },
  {
    path: "404",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaticRoutingModule {}
