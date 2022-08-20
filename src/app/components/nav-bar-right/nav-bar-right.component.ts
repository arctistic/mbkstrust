import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HomePageService } from 'src/app/services/home-page.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-right',
  templateUrl: './nav-bar-right.component.html',
  styleUrls: ['./nav-bar-right.component.scss']
})
export class NavBarRightComponent implements OnInit {

  navigationSubscription:any;

  @Input() projects:any

  @Output() projectIdEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private router:Router, private routes:ActivatedRoute) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }
  initialiseInvites() {
    this.projectIdEmitter.emit(this.routes.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

  }

  navitageToProject(project_id:any){

  }

}
