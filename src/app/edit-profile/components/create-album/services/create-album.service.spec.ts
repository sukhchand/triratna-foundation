import { TestBed } from '@angular/core/testing';

import { CreateAlbumService } from './create-album.service';

describe('CreateAlbumService', () => {
  let service: CreateAlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateAlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
