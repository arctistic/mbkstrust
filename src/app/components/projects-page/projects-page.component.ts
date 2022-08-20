import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProjectsPageService } from 'src/app/services/projects-page.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  public project:any = null;
  showLoadingPage:boolean = true;

  constructor(
    private projectPageService:ProjectsPageService,
    private routes: ActivatedRoute,
    private titleService:Title) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    let curThis = this;
    setTimeout(function(){
      curThis.projectPageService.getProjects().subscribe(
        projects => {
          let currentProjectId = curThis.routes.snapshot.paramMap.get('id');
          curThis.project = curThis.searchForProject(currentProjectId, projects);
          curThis.showLoadingPage = false;
          curThis.titleService.setTitle(curThis.project.project_name);
        }
      )
    }, 1000)
  }

  searchForProject(projectId:any, projects:any){
    for (var i = 0; i < projects.length; i++) {
      if (projects[i].project_id == projectId) {
        return projects[i];
      }
    }
  }

  idEmitter(data:any){
    this.showLoadingPage = true;
    this.ngOnInit();
  }
}
