import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSectionLandingPageComponent } from './contact-section-landing-page.component';

describe('ContactSectionLandingPageComponent', () => {
  let component: ContactSectionLandingPageComponent;
  let fixture: ComponentFixture<ContactSectionLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSectionLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSectionLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
