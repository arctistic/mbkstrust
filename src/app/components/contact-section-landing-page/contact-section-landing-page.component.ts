import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-section-landing-page',
  templateUrl: './contact-section-landing-page.component.html',
  styleUrls: ['./contact-section-landing-page.component.scss']
})
export class ContactSectionLandingPageComponent implements OnInit {

  @Input() data:any;
  @Input() mbks_logo:any;

  constructor() { }

  ngOnInit(): void {

  }

}
