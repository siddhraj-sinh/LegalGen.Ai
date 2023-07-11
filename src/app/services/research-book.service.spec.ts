import { TestBed } from '@angular/core/testing';

import { ResearchBookService } from './research-book.service';

describe('ResearchBookService', () => {
  let service: ResearchBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResearchBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
