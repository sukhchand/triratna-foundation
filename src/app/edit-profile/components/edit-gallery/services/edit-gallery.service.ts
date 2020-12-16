import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BASE_URL } from 'src/app/constant';

@Injectable({
  providedIn: 'root'
})
export class EditGalleryService {

  constructor(private http: HttpClient) { }

  public getAlbum() {
    const path = `${BASE_URL}/gallery/thumbnailphotos`;
    return this.http
      .get(path)
      .pipe(map((response: any) => response));
  }
  
}
