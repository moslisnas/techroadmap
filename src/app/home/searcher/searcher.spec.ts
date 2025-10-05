import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Router } from '@angular/router';

import { environment } from '@env/environment';
import TechMockData from '@mock/TechData';
import { Searcher } from './searcher';

describe('Searcher', () => {
  let component: Searcher;
  let fixture: ComponentFixture<Searcher>;
  let httpMock: HttpTestingController;
  let router: Router;
  const mockTechnologies = TechMockData;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Searcher],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Searcher);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();

    const req = httpMock.expectOne(`${environment.apiUrl}${environment.apiVersion}/technology`);
    req.flush(mockTechnologies);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log error when API call fails', () => {
    // Arrange
    const consoleSpy = spyOn(console, 'error');
    const errorFixture = TestBed.createComponent(Searcher);
    const errorComponent = errorFixture.componentInstance;
    const errorHttpMock = TestBed.inject(HttpTestingController);
    // Act
    errorFixture.detectChanges();
    const req = errorHttpMock.expectOne(`${environment.apiUrl}${environment.apiVersion}/technology`);
    req.error(new ErrorEvent('Network error'));
    // Assert
    expect(consoleSpy).toHaveBeenCalledWith(
      'Error obtaining data: technologies',
      jasmine.any(HttpErrorResponse)
    );
    expect(errorComponent.technologies.length).toBe(0);
  });

  it('searcher input should redirect when searchValue is valid', () => {
    // Arrange
    component.searchValue = 'angular';
    const navigateSpy = spyOn(router, 'navigate').and.resolveTo(true);
    // Act
    component.redirectRoadmapPage();
    // Assert
    expect(navigateSpy).toHaveBeenCalledWith(['/roadmap'], {
      queryParams: { tech: 'angular' },
    });
  });
  it('searcher should show dropdown when input > 1 character and if there are results', () => {
    // Arrange
    component.searchValue = 'angular';
    // Act
    component.onSearchChange();
    // Assert
    expect(component.showDropdown).toBeTrue();
    expect(component.filteredTech.length).toBeGreaterThan(0);
    expect(component.filteredTech[0].name).toBe('Angular');
  });
  it("searcher shouldn't show dropdown when input <= 1 character", () => {
    // Arrange
    component.searchValue = 'a';
    // Act
    component.onSearchChange();
    // Assert
    expect(component.showDropdown).toBeFalse();
    expect(component.filteredTech.length).toBe(0);
  });

  it('dropdown element should redirect when is clicked', () => {
    // Arrange
    component.filteredTech = mockTechnologies;
    const navigateSpy = spyOn(router, 'navigate').and.resolveTo(true);
    // Act
    component.selectTech(component.filteredTech[0]);
    // Assert
    expect(navigateSpy).toHaveBeenCalledWith(['/roadmap'], {
      queryParams: { tech: mockTechnologies[0].name },
    });
  });
});
