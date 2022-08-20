import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections-landing-page',
  templateUrl: './sections-landing-page.component.html',
  styleUrls: ['./sections-landing-page.component.scss']
})
export class SectionsLandingPageComponent implements OnInit {

  @Input() title:any;
  @Input() caption:any;
  @Input() photoFirst:any;
  @Input() photo:any;

  constructor() { }

  ngOnInit(): void {
  }

}
