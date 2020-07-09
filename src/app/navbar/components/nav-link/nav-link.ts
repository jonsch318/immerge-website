import { Component, Input } from "@angular/core";

@Component({
  selector: "nav-link",
  templateUrl: "./nav-link.html",
  styleUrls: ["./nav-link.scss"],
  host: {
    class: "d-block",
  },
})
export class NavLinkComponent {
  @Input("exRouterLink")
  routerLink: any[] | string | undefined | null;
}
