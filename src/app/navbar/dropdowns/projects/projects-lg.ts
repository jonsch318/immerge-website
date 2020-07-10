import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatMenu } from "@angular/material/menu";

@Component({
  selector: "nav-projects-large",
  templateUrl: "./projects-lg.html",
  styleUrls: ["./projects-lg.scss"],
})
export class ProjectsLarge implements AfterViewInit {
  @ViewChild("menu", { static: false })
  matMenu: MatMenu;

  ngAfterViewInit(): void {
    this.matMenu.setElevation(1);
  }
}
