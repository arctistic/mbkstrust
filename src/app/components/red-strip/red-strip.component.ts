import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-strip',
  templateUrl: './red-strip.component.html',
  styleUrls: ['./red-strip.component.scss']
})
export class RedStripComponent implements OnInit {

  @Input() logo1:any;
  @Input() logo2:any;
  @Input() title1:any;
  @Input() title2:any;
  @Input() caption1:any;
  @Input() caption2:any;

  constructor() { }

  ngOnInit(): void {
  }

}
