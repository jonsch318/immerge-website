import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "nav-link",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.scss"],
})
export class LinkComponent implements OnInit {
  @Input()
  url: string;

  constructor() {}

  ngOnInit(): void {}
}
