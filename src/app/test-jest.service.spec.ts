import { TestBed } from '@angular/core/testing';

import { TestJestService } from './test-jest.service';

describe('TestJestService', () => {
  let service: TestJestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestJestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
