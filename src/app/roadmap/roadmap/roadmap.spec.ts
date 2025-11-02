import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

import { ApiService } from '@services/api/api.service';
import { Roadmap } from './roadmap';
import { mockTechs } from '@mock/components/roadmap.mocks';

describe('Roadmap', () => {
  let component: Roadmap;
  let fixture: ComponentFixture<Roadmap>;
  let mockApiService: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    mockApiService = jasmine.createSpyObj('ApiService', ['getTechnologies']);

    await TestBed.configureTestingModule({
      imports: [Roadmap],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: ApiService, useValue: mockApiService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Roadmap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should stablish techActive = true when tech is longer than 2 and results found', () => {
    // Arrange
    component.tech = 'angular';
    mockApiService.getTechnologies.and.returnValue(of(mockTechs));
    // Act
    component.ngOnInit();
    // Assert
    expect(component.techActive).toBeTrue();
    expect(component.tech).toBe('Angular');
  });

  it('should keep techActive = false when tech is shorter than 2', () => {
    // Arrange
    component.tech = 'js';
    // Act
    component.ngOnInit();
    // Assert
    expect(component.techActive).toBeFalse();
  });
  it('should log an error when API call fails', () => {
    // Arrange
    component.tech = 'angular';
    const consoleSpy = spyOn(console, 'error');
    mockApiService.getTechnologies.and.returnValue(throwError(() => new Error('API error')));
    // Act
    component.ngOnInit();
    // Assert
    expect(consoleSpy).toHaveBeenCalledWith(
      'Error obtaining data: technologies',
      jasmine.any(Error)
    );
    expect(component.techActive).toBeFalse();
  });
});
