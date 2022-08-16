import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavBarLeftComponent } from './components/nav-bar-left/nav-bar-left.component';
import { SocialsHeaderComponent } from './components/socials-header/socials-header.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { AboutusPageComponent } from './components/aboutus-page/aboutus-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 's',
    component: SocialsHeaderComponent
  },
  {
    path: 'projects',
    component: ProjectsPageComponent
  },
  {
    path: 'aboutus',
    component: AboutusPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
