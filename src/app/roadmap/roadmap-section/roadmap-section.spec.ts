import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapSection } from './roadmap-section';

describe('RoadmapSection', () => {
  let component: RoadmapSection;
  let fixture: ComponentFixture<RoadmapSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadmapSection],
    }).compileComponents();

    fixture = TestBed.createComponent(RoadmapSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
