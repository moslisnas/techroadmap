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

  it('should load roadmap-element variables when techString find one element', () => {
    // Arrange
    component.techString = 'Angular';
    component.techActive = true;
    // Act
    component.ngOnInit();
    // Asserts
    expect(component.techSelected).toBeDefined();
  });
});
