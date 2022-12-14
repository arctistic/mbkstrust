import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AboutusPageService } from 'src/app/services/aboutus-page.service';

@Component({
  selector: 'app-aboutus-page',
  templateUrl: './aboutus-page.component.html',
  styleUrls: ['./aboutus-page.component.scss']
})
export class AboutusPageComponent implements OnInit {

  public trustees:any;
  public members:any;

  constructor(
    private aboutUsService:AboutusPageService,
    private titleService:Title) {
      this.titleService.setTitle('About Us')
    }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.aboutUsService.getTeam().subscribe(
      data => {
        this.trustees = data[0].trustees;
        this.members = data[0].members;
      }
    )
  }

}
