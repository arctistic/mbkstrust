import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-left',
  templateUrl: './nav-bar-left.component.html',
  styleUrls: ['./nav-bar-left.component.scss']
})
export class NavBarLeftComponent implements OnInit {

  @Input() mbks_logo:any;

  constructor() { }

  ngOnInit(): void {
  }

}
