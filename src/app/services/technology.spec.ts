import { TestBed } from '@angular/core/testing';
import { TechnologyService } from './technology.service';
import { mockTech } from '@mock/components/timeline.mocks';

describe('Technology', () => {
  let service: TechnologyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnologyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return undefined if no technology is set', () => {
    expect(service.getTechnology()).toBeUndefined();
  });
  it('should set and get the technology correctly', () => {
    // Arrange
    service.setTechnology(mockTech);
    // Act
    const result = service.getTechnology();
    // Assert
    expect(result).toEqual(mockTech);
  });
});
