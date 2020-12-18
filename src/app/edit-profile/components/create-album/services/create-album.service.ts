import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BASE_URL } from 'src/app/constant';

@Injectable({
  providedIn: 'root'
})
export class CreateAlbumService {

  constructor(private http: HttpClient,  private httpBackend: HttpBackend) { }
  public createAlbum(createAlbumData:any) {
    const path =`${BASE_URL}/gallery`;
    let httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'multipart/form-data')
    }
    return this.http
      .post(path, createAlbumData, httpOptions)
      .pipe(map((response: any) => response));
  }
}
