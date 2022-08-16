import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrusteeCardComponent } from './trustee-card.component';

describe('TrusteeCardComponent', () => {
  let component: TrusteeCardComponent;
  let fixture: ComponentFixture<TrusteeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrusteeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrusteeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
