import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HomePageService } from 'src/app/services/home-page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output() projectIdFromFooter: EventEmitter<any> = new EventEmitter();

  navigationSubscription: any;

  public projects: any = [];

  constructor(
    private homePageService: HomePageService,
    private router: Router,
    private routes: ActivatedRoute) {
      this.navigationSubscription = this.router.events.subscribe((e: any) => {
        // If it is a NavigationEnd event re-initalise the component
        if (e instanceof NavigationEnd) {
          this.initialiseInvites();
        }
      });
    }

  initialiseInvites() {
    this.projectIdFromFooter.emit(this.routes.snapshot.paramMap.get('id'));
  }

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
