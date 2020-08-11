import { Component, Input } from "@angular/core";

@Component({
  selector: "nav-link",
  templateUrl: "./nav-link.html",
  styleUrls: ["./nav-link.css"],
  host: {
    class: "block cursor-pointer",
  },
})
export class NavLinkComponent {
  @Input("routerLink")
  routerLink: any[] | string | undefined | null;
}
