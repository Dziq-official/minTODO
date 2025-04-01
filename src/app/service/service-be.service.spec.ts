import { TestBed } from '@angular/core/testing';

import { ServiceBEService } from './service-be.service';

describe('ServiceBEService', () => {
  let service: ServiceBEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
