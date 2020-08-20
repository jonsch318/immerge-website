import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ContactSite } from "./contact.site";

describe("ContactSite", () => {
  let component: ContactSite;
  let fixture: ComponentFixture<ContactSite>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactSite],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
