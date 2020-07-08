import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, Subscription } from "rxjs";

@Component({
  selector: "im-main-navbar",
  templateUrl: "./navbar.html",
  styleUrls: ["./navbar.scss"],
})
export class MainNavbar implements OnInit {
  $sidenavOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  sidenavOpen: Observable<boolean> = this.$sidenavOpen.asObservable();
  sidenavOpenSubscription = Subscription.EMPTY;

  ngOnInit() {
    this.sidenavOpenSubscription = this.sidenavOpen.subscribe((val) => {});
  }
}
