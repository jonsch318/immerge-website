import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SigninSite } from "./signin.site";

describe("SigninComponent", () => {
  let component: SigninSite;
  let fixture: ComponentFixture<SigninSite>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SigninSite],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninSite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
