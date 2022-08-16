import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trustee-card',
  templateUrl: './trustee-card.component.html',
  styleUrls: ['./trustee-card.component.scss']
})
export class TrusteeCardComponent implements OnInit {

  @Input() isPhotoLeft:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.isPhotoLeft);
  }

}
