import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { mockTechnologyWithVersions } from '@mock/services/api-service.mocks';
import { ApiService } from '@services/api/api.service';
import { TechnologyStore } from './technology.store';

describe('TechnologyStore', () => {
  let store: TechnologyStore;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['getTechnologyByIdWithVersions']);

    TestBed.configureTestingModule({
      providers: [TechnologyStore, { provide: ApiService, useValue: apiServiceSpy }],
    });

    store = TestBed.inject(TechnologyStore);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
    expect(store.tech()).toBeNull();
  });

  it('loadTechWithDependencies should set tech when API returns data', fakeAsync(() => {
    // Arrange
    apiServiceSpy.getTechnologyByIdWithVersions.and.returnValue(of(mockTechnologyWithVersions));
    // Act
    store.loadTechWithDependencies(mockTechnologyWithVersions.id);
    flushMicrotasks();
    // Assert
    expect(apiServiceSpy.getTechnologyByIdWithVersions).toHaveBeenCalledWith(
      mockTechnologyWithVersions.id
    );
    expect(store.tech()).toEqual(mockTechnologyWithVersions);
  }));
  it('loadTechWithDependencies should not throw when API errors', fakeAsync(() => {
    const consoleSpy = spyOn(console, 'error');
    apiServiceSpy.getTechnologyByIdWithVersions.and.returnValue(
      throwError(() => new Error('API error'))
    );
    // Act
    store.loadTechWithDependencies(123);
    flushMicrotasks();
    // Assert
    expect(consoleSpy).toHaveBeenCalledWith('Error obtaining data: technology', jasmine.any(Error));
    expect(store.tech()).toBeNull();
  }));
});
