import { TestBed } from '@angular/core/testing';
import { TechnologyApiService } from '@service/TechnologyApi.service';

describe('TechnologyApiService', () => {
  let service: TechnologyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnologyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
