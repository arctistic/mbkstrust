import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { AboutusPageComponent } from './components/aboutus-page/aboutus-page.component';
import { SocialsHeaderComponent } from './components/socials-header/socials-header.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'project/:id',
    component: ProjectsPageComponent
  },
  {
    path: 'aboutus',
    component: AboutusPageComponent
  },
  {
    path: '**',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
