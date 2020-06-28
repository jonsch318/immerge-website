import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavbarComponent } from "./navbar.component";

describe("NavbarComponent", () => {
    l     component: NavbarComponent;
        t fixture: ComponentFixture<NavbarComponent>;

        foreEach(async(() => {
            TestBed.configureTestingModule({
                  declarations: [NavbarComponen                        }).compileComponents();       }));
       beforeEach(() =>               fixture = TestBed.createComponent(NavbarCompone
        component = fixture.componentIn        ce;
        fixture.detect    anges()        });

    it("should creat        () => {
        expect(component)    oBeTruthy();
    });
});
