import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-karyasa-card',
  templateUrl: './karyasa-card.component.html',
  styleUrls: ['./karyasa-card.component.scss']
})
export class KaryasaCardComponent implements OnInit {

  @Input() firstName:any;
  @Input() lastName:any;
  @Input() photo:any;

  constructor() { }

  ngOnInit(): void {
  }

}
