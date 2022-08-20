import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trustee-card',
  templateUrl: './trustee-card.component.html',
  styleUrls: ['./trustee-card.component.scss']
})
export class TrusteeCardComponent implements OnInit {

  @Input() isPhotoLeft:any;
  @Input() photo:any;
  @Input() name:any;
  @Input() post:any;
  @Input() caption:any;
  @Input() facebook:any = null;
  @Input() insagram:any = null;
  @Input() linkedin:any = null;


  constructor() { }

  ngOnInit(): void {
  }

}
