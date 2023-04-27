import { TestBed } from '@angular/core/testing';

import { EventifyService } from './eventify.service';

describe('EventifyService', () => {
  let service: EventifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
