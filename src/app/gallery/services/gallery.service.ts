import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BASE_URL } from 'src/app/constant';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient, private httpBackend: HttpBackend) { }

  public getAlbum() {
    const path = `${BASE_URL}/gallery/thumbnailphotos`;
    return this.http
      .get(path)
      .pipe(map((response: any) => response));
  }

}
