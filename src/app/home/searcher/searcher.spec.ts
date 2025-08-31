import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Searcher } from './searcher';
import { Router } from '@angular/router';
import TechMockData from 'data/TechData';

describe('Searcher', () => {
  let component: Searcher;
  let fixture: ComponentFixture<Searcher>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Searcher],
    }).compileComponents();

    fixture = TestBed.createComponent(Searcher);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
  it('searcher should show dropdown when input > 1 character and when there are results', () => {
    // Arrange
    component.searchValue = 'angular';
    // Act
    component.onSearchChange();
    // Assert
    expect(component.showDropdown).toBeTrue();
    expect(component.filteredTech.length).toBeGreaterThan(0);
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
    component.filteredTech = TechMockData;
    const navigateSpy = spyOn(router, 'navigate').and.resolveTo(true);
    // Act
    component.selectTech(component.filteredTech[0]);
    // Assert
    expect(navigateSpy).toHaveBeenCalledWith(['/roadmap'], {
      queryParams: { tech: TechMockData[0].name },
    });
  });
});
