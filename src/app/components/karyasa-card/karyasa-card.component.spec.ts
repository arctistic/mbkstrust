import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaryasaCardComponent } from './karyasa-card.component';

describe('KaryasaCardComponent', () => {
  let component: KaryasaCardComponent;
  let fixture: ComponentFixture<KaryasaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaryasaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaryasaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
