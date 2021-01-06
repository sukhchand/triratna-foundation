import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BASE_URL } from 'src/app/constant';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient, private httpBackend: HttpBackend) { }
  public getImages(albumName, page, pageSize) {
    const path = `${BASE_URL}/gallery/thumbnailphotos/${albumName}/${page}/${pageSize}`;
    return this.http
      .get(path)
      .pipe(map((response: any) => response));
  }
  public deleteImages(id) {
    const path = `${BASE_URL}/gallery/${id}`;
    return this.http
      .delete(path)
      .pipe(map((response: any) => response));
  }
  public createAlbum(createAlbumData:any) {
    const path =`${BASE_URL}/gallery`;
    // let httpOptions = {
    //   headers: new HttpHeaders().set('Content-Type', 'multipart/form-data')
    // }
    return this.http
      .post(path, createAlbumData)
      .pipe(map((response: any) => response));
  }
}
