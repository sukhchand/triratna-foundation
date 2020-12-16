import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BASE_URL } from 'src/app/constant';

@Injectable({
  providedIn: 'root'
})
export class EditGalleryService {

  constructor(private http: HttpClient) { }

  public getImages(albumName, page, pageSize) {
    const path = `${BASE_URL}/gallery/thumbnailphotos/${albumName}/${page}/${pageSize}`;
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

  public getPhotos() {
    const path = `${BASE_URL}/gallery/thumbnailphotos`;
    return this.http
      .get(path)
      .pipe(map((response: any) => response));
  }
  public createAlbum(createAlbumData:any) {
    const path =`${BASE_URL}/gallery`;
    return this.http
      .post(path, createAlbumData)
      .pipe(map((response: any) => response));
  }
  
}
