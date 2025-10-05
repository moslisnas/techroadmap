import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import TechMockData from '@mock/TechData';
import { TechnologyStore } from '@app/stores/technology.store';
import { Timeline } from './timeline';

describe('Timeline', () => {
  let component: Timeline;
  let fixture: ComponentFixture<Timeline>;
  let technologyStoreSpy: jasmine.SpyObj<TechnologyStore>;
  const mockTechnologies = TechMockData;

  beforeEach(async () => {
    technologyStoreSpy = jasmine.createSpyObj('TechnologyStore', ['loadTechWithDependencies']);

    (technologyStoreSpy as any).tech = signal(mockTechnologies[0]);

    await TestBed.configureTestingModule({
      imports: [Timeline],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: TechnologyStore, useValue: technologyStoreSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Timeline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
