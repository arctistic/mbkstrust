import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsPageService {

  constructor(private http:HttpClient) { }

  getProjects():Observable<any>{
    return this.http.get<any>('https://arctistic.github.io/wearembks/JSON-projects.json');
    // return this.http.get<any>('../assets/json/JSON-projects.json');
  }
}
