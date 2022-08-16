import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsLandingPageComponent } from './sections-landing-page.component';

describe('SectionsLandingPageComponent', () => {
  let component: SectionsLandingPageComponent;
  let fixture: ComponentFixture<SectionsLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionsLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
