import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialsHeaderComponent } from './components/socials-header/socials-header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarLeftComponent } from './components/nav-bar-left/nav-bar-left.component';
import { NavBarRightComponent } from './components/nav-bar-right/nav-bar-right.component';
import { HomeComponent } from './components/home/home.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { SectionsLandingPageComponent } from './components/sections-landing-page/sections-landing-page.component';
import { RedStripComponent } from './components/red-strip/red-strip.component';
import { VideoLandingPageComponent } from './components/video-landing-page/video-landing-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactSectionLandingPageComponent } from './components/contact-section-landing-page/contact-section-landing-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { AboutusPageComponent } from './components/aboutus-page/aboutus-page.component';
import { TrusteeCardComponent } from './components/trustee-card/trustee-card.component';
import { KaryasaCardComponent } from './components/karyasa-card/karyasa-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialsHeaderComponent,
    NavBarComponent,
    NavBarLeftComponent,
    NavBarRightComponent,
    HomeComponent,
    HomeHeaderComponent,
    SectionsLandingPageComponent,
    RedStripComponent,
    VideoLandingPageComponent,
    FooterComponent,
    ContactSectionLandingPageComponent,
    ProjectsPageComponent,
    AboutusPageComponent,
    TrusteeCardComponent,
    KaryasaCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
