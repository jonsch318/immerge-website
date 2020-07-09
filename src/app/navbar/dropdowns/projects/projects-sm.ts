import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "nav-project-small",
  templateUrl: "./projects-sm.html",
  styleUrls: ["./projects-sm.scss"],
})
export class ProjectsSmall {
  open: boolean;
  icon: BehaviorSubject<string> = new BehaviorSubject<string>("keyboard_arrow_down");

  handleClick(): void {
    this._setState(!this.open);
  }

  private _setState(state: boolean): void {
    if (state === this.open) {
      return;
    }
    this.open = state;
    this.icon.next(state ? "keyboard_arrow_up" : "keyboard_arrow_down");
  }
}
