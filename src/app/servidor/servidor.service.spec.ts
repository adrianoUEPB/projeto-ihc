import { TestBed, inject } from '@angular/core/testing';

import { ServidorService } from './servidor.service';

describe('ServidorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServidorService]
    });
  });

  it('should be created', inject([ServidorService], (service: ServidorService) => {
    expect(service).toBeTruthy();
  }));
});
