import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTrusteeCardComponent } from './mobile-trustee-card.component';

describe('MobileTrusteeCardComponent', () => {
  let component: MobileTrusteeCardComponent;
  let fixture: ComponentFixture<MobileTrusteeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTrusteeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTrusteeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
