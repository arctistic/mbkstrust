import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Routes } from '@angular/router';


@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
  animations: [
    trigger('slidein', [
      state('void', style({
        width: '0em',
        opacity: '0%'
      })),
      transition('void => *, * => void', [
        animate(100)
      ])
    ]),
    trigger('dorpdown', [
      state('void', style({
        height: '0em',
        opacity: '0%'
      })),
      transition('void => *, * => void', [
        animate(100)
      ])
    ])
  ]
})
export class MobileNavComponent implements OnInit {

  @Input() projects:any;

  @Output() projectIdEmitterFromMobileNav: EventEmitter<any> = new EventEmitter();

  public showMenu:boolean = false;
  public showProjects:boolean = false;
  navigationSubscription: any;

  constructor(
    private router:Router,
    private routes:ActivatedRoute) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    this.projectIdEmitterFromMobileNav.emit(this.routes.snapshot.paramMap.get('id'));
    this.showMenu = false;
  }

  ngOnInit(): void {
  }

  slide(){
    this.showMenu = !this.showMenu;
  }
  dropdown(){
    this.showProjects = !this.showProjects;
  }
}
