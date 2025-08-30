import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Searcher } from './searcher';
import { Router } from '@angular/router';

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
});
