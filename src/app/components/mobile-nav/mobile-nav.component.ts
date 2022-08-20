import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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

  public showMenu:boolean = false;
  public showProjects:boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  slide(){
    this.showMenu = !this.showMenu;
  }
  dropdown(){
    this.showProjects = !this.showProjects;
  }

  navitageToProject(project_id: string) {
    this.router.navigate(['project', project_id]).then(page => { window.location.reload(); });
  }

}
