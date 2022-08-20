import { Component, Input, OnInit } from '@angular/core';
import { HomePageService } from 'src/app/services/home-page.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public projects:any;
  public mbks_logo: any;

  constructor(private homeService:HomePageService) {

  }

  ngOnInit(): void {
    this.homeService.getProjectNames().subscribe((data: any) => {
      this.projects = data[0].project_names;
      this.mbks_logo = data[0].mbks_logo;
    })
  }

}
