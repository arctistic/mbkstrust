import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
  animations: [
    trigger('drop', [
      state('void', style({
        height: '0em',
        opacity: '0%'
      })),
      transition('void => *', [
        animate(300)
      ])
    ])
  ]
})
export class HomeHeaderComponent implements OnInit {

  @Input() title:any;
  @Input() caption:any;
  @Input() photo:any;
  @Input() donateBg:any;
  @Input() bankDetails:any
  @Input() qrcode:any;

  public showDonate:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDonate(){
    this.showDonate = true;
  }

  closeDonate(){
    this.showDonate = false;
  }
}
