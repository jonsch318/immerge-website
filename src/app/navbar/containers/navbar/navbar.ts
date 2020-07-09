import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "im-main-navbar",
  templateUrl: "./navbar.html",
  styleUrls: ["./navbar.scss"],
})
export class MainNavbar implements OnInit {
  $sidenavOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {}
}
