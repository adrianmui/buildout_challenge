import { TestBed, inject } from '@angular/core/testing';

import { BrokersService } from './brokers.service';

describe('BrokersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrokersService]
    });
  });

  it('should ...', inject([BrokersService], (service: BrokersService) => {
    expect(service).toBeTruthy();
  }));
});
