import { TestBed } from '@angular/core/testing';
import { TechnologyService } from './technology.service';

describe('Technology', () => {
  let service: TechnologyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnologyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
