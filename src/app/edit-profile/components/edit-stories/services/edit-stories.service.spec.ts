import { TestBed } from '@angular/core/testing';

import { EditStoriesService } from './edit-stories.service';

describe('EditStoriesService', () => {
  let service: EditStoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditStoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
