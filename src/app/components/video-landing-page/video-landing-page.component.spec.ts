import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLandingPageComponent } from './video-landing-page.component';

describe('VideoLandingPageComponent', () => {
  let component: VideoLandingPageComponent;
  let fixture: ComponentFixture<VideoLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
