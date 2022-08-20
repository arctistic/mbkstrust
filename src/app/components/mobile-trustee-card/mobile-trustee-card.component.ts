import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-trustee-card',
  templateUrl: './mobile-trustee-card.component.html',
  styleUrls: ['./mobile-trustee-card.component.scss']
})
export class MobileTrusteeCardComponent implements OnInit {

  @Input() trustee:any;

  constructor() { }

  ngOnInit(): void {
  }

}
