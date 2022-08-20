import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-landing-page',
  templateUrl: './video-landing-page.component.html',
  styleUrls: ['./video-landing-page.component.scss']
})
export class VideoLandingPageComponent implements OnInit {

  @Input() videoId:any;

  public safeUrl:any;

  constructor(private domSanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.getSafeUrl('https://www.youtube.com/embed/'+this.videoId);
  }

  getSafeUrl(url:any) {
    this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
