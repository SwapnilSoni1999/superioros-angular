import { TestBed } from '@angular/core/testing';

import { JsonParseService } from './json-parse.service';

describe('JsonParseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonParseService = TestBed.get(JsonParseService);
    expect(service).toBeTruthy();
  });
});
