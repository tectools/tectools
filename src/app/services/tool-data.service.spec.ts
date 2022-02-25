import { TestBed } from '@angular/core/testing';

import { ToolDataService } from './tool-data.service';

describe('ToolDataService', () => {
  let service: ToolDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
