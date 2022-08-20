import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private http:HttpClient) {

  }

  getProjectNames(): Observable<any>{
    return this.http.get<any>('https://arctistic.github.io/wearembks/JSON-navbar.json');
    // return this.http.get<any>('../assets/json/JSON-navbar.json');
  }

  getSectionInfo(): Observable<any>{
    return this.http.get<any>('https://arctistic.github.io/wearembks/JSON-home.json');
    // return this.http.get<any>('../assets/json/JSON-home.json');
  }
}
