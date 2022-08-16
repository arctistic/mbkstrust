import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedStripComponent } from './red-strip.component';

describe('RedStripComponent', () => {
  let component: RedStripComponent;
  let fixture: ComponentFixture<RedStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedStripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
