import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { mockTechnologies, mockTechnologyWithVersions } from '@mock/services/api-service.mocks';
import { ApiService } from '@services/api/api.service';
import { environment } from '@env/environment';

describe('Api', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  const baseUrl = environment.apiUrl + environment.apiVersion;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getTechnologies should return technologies', () => {
    // Act
    service.getTechnologies().subscribe((res) => {
      expect(res).toEqual(mockTechnologies);
    });
    // Assert
    const req = httpMock.expectOne(`${baseUrl}/technology`);
    expect(req.request.method).toBe('GET');
    req.flush(mockTechnologies);
  });

  it('getTechnologyById should return technology by id', () => {
    // Arrange
    const id = 1;
    // Act
    service.getTechnologyById(id).subscribe((res) => {
      expect(res).toEqual(mockTechnologies[0]);
    });
    // Assert
    const req = httpMock.expectOne(`${baseUrl}/technology?id=${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockTechnologies[0]);
  });

  it('getTechnologyByIdWithVersions should return technology with versions', () => {
    // Arrange
    const id = 1;
    // Act
    service.getTechnologyByIdWithVersions(id).subscribe((res) => {
      expect(res).toEqual(mockTechnologyWithVersions);
    });
    // Assert
    const req = httpMock.expectOne(`${baseUrl}/technology?id=${id}&dependencies=true`);
    expect(req.request.method).toBe('GET');
    req.flush(mockTechnologyWithVersions);
  });

  it('getTechnologyVersionsByIdTechnology should return versions', () => {
    // Arrange
    const id = 1;
    const mockVersions = mockTechnologyWithVersions.versions;
    // Act
    service.getTechnologyVersionsByIdTechnology(id).subscribe((res) => {
      expect(res).toEqual(mockVersions);
    });
    // Assert
    const req = httpMock.expectOne(`${baseUrl}/technology_versions?id_technology=${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockVersions);
  });
});
