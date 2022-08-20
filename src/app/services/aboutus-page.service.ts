import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutusPageService {

  constructor(private http:HttpClient) { }

  getTeam():Observable<any>{
    return this.http.get<any>('https://arctistic.github.io/wearembks/JSON-aboutus.json');
    // return this.http.get<any>('../assets/json/JSON-aboutus.json');

  }
}
