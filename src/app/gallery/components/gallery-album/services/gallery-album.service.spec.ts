import { TestBed } from '@angular/core/testing';

import { GalleryAlbumService } from './gallery-album.service';

describe('GalleryAlbumService', () => {
  let service: GalleryAlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryAlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
