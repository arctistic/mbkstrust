import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePageService } from 'src/app/services/home-page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public projects: any = [];

  constructor(private homePageService: HomePageService, private router: Router) { }

  ngOnInit(): void {
    this.homePageService.getProjectNames().subscribe((data: any) => {
      this.projects = data[0].project_names;
    })
  }

  navitageToProject(project_id:string){
    this.router.navigate(['project', project_id]).then(page => {
      window.location.reload();
      window.scroll(0, 0);
    });
  }

}
