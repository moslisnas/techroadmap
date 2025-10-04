import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { RoadmapElement } from './roadmap-element';

describe('RoadmapElement', () => {
  let component: RoadmapElement;
  let fixture: ComponentFixture<RoadmapElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadmapElement],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(RoadmapElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
