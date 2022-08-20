import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HomePageService } from 'src/app/services/home-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public info:any = null;

  constructor(
    private homeService:HomePageService,
    private titleService: Title) {
      this.titleService.setTitle('Mukh Bandh Kaam Suru')
    }

  ngOnInit(): void {
    window.scroll(0, 0);

    this.homeService.getSectionInfo().subscribe(
      data => {
        this.info=data[0];
      }
    )
  }

}
