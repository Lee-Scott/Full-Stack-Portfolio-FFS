import { TestBed } from '@angular/core/testing';

import { FFSshopFormService } from './ffsshop-form.service';

describe('FFSshopFormService', () => {
  let service: FFSshopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FFSshopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
