import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { environment } from '@env/environment';
import { MockRoadmapElement } from '@mock/components/roadmap-element.mocks';
import { MockTimeline } from '@mock/components/timeline.mocks';
import TechMockData from '@mock/TechData';
import { TechnologyStore } from '@app/stores/technology.store';
import { RoadmapSection } from './roadmap-section';

describe('RoadmapSection', () => {
  let component: RoadmapSection;
  let fixture: ComponentFixture<RoadmapSection>;
  let httpMock: HttpTestingController;
  let technologyStoreSpy: jasmine.SpyObj<TechnologyStore>;
  const mockTechnologies = TechMockData;

  beforeEach(async () => {
    technologyStoreSpy = jasmine.createSpyObj('TechnologyStore', ['loadTechWithDependencies']);
    (technologyStoreSpy as any).tech = signal(null);

    await TestBed.configureTestingModule({
      imports: [RoadmapSection],
      declarations: [MockRoadmapElement, MockTimeline],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: TechnologyStore, useValue: technologyStoreSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RoadmapSection);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call technologyStore.loadTechWithDependencies when techString matches a technology', () => {
    // Arrange
    component.techString = 'Angular';
    component.techActive = true;
    // Act
    fixture.detectChanges();
    const req = httpMock.expectOne(`${environment.apiUrl}${environment.apiVersion}/technology`);
    req.flush(mockTechnologies);
    // Asserts
    expect(technologyStoreSpy.loadTechWithDependencies).toHaveBeenCalledWith(
      mockTechnologies[0].id
    );
  });
  it('should log error when API call fails', () => {
    // Arrange
    component.techString = 'Angular';
    component.techActive = true;
    const consoleSpy = spyOn(console, 'error');
    // Act
    fixture.detectChanges();
    const req = httpMock.expectOne(`${environment.apiUrl}${environment.apiVersion}/technology`);
    req.error(new ErrorEvent('Network error'));
    // Assert
    expect(consoleSpy).toHaveBeenCalledWith(
      'Error obtaining data: technologies',
      jasmine.any(HttpErrorResponse)
    );
    expect(technologyStoreSpy.loadTechWithDependencies).not.toHaveBeenCalled();
  });
});
