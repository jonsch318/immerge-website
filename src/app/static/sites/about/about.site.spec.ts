import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AboutSite } from "./about.site";

describe("AboutSite", () => {
  let component: AboutSite;
  let fixture: ComponentFixture<AboutSite>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutSite],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
