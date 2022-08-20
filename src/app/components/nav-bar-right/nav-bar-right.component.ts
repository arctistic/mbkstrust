import { Component, Input, OnInit } from '@angular/core';
import { HomePageService } from 'src/app/services/home-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-right',
  templateUrl: './nav-bar-right.component.html',
  styleUrls: ['./nav-bar-right.component.scss']
})
export class NavBarRightComponent implements OnInit {

  @Input() projects:any

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  navitageToProject(project_id:string){
    this.router.navigate(['project', project_id]).then(page => { window.location.reload(); });
  }

}
