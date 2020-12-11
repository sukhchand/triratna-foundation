import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BASE_URL } from 'src/app/constant';

@Injectable({
  providedIn: 'root'
})
export class EditGalleryService {

  constructor(private http: HttpClient) { }

  public getImages(page, pageSize) {
    const path = `${BASE_URL}/gallery/thumbnailphotos/${page}/${pageSize}`;
    return this.http
      .get(path)
      .pipe(map((response: any) => response));
  }

  public getVideos(page, pageSize) {
    const path = `${BASE_URL}/gallery/video/${page}/${pageSize}`;
    return this.http
      .get(path)
      .pipe(map((response: any) => response));
  }
}
