import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BASE_URL } from 'src/app/constant';


@Injectable({
  providedIn: 'root'
})
export class GalleryAlbumService {

  constructor(private http: HttpClient, private httpBackend: HttpBackend) { }
  public getImages(albumName, page, pageSize) {
    const path = `${BASE_URL}/gallery/thumbnailphotos/${albumName}/${page}/${pageSize}`;
    return this.http
      .get(path)
      .pipe(map((response: any) => response));
  }
  public getPagination(data) {
    const path = `${BASE_URL}/util/count`;
    return this.http
      .post(path, data)
      .pipe(map((response: any) => response),
      catchError((errorRes) => {
        return throwError(errorRes.message);
      }));
  }
}
