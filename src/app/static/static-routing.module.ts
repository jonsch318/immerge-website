import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./containers/index/index.component";
import { NotFoundComponent } from "./containers/notfound/not-found.component";

export const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
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
