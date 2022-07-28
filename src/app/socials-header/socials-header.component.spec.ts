import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsHeaderComponent } from './socials-header.component';

describe('SocialsHeaderComponent', () => {
  let component: SocialsHeaderComponent;
  let fixture: ComponentFixture<SocialsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
