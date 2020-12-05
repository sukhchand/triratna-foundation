import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BASE_URL } from 'src/app/constant';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor(private http: HttpClient, private router: Router) { }
  public getEvents(obj:any) {
    const path =`${BASE_URL}/event/get`;
    return this.http
      .post(path, obj)
      .pipe(map((response: any) => response));
      
  }
}
