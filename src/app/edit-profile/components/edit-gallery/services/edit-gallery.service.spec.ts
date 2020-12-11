import { TestBed } from '@angular/core/testing';

import { EditGalleryService } from './edit-gallery.service';

describe('EditGalleryService', () => {
  let service: EditGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
