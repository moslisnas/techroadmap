import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { MockTimelineTooltip } from '@mock/components/timeline-tooltip.mocks';
import TechMockData from '@mock/TechData';
import { TechnologyStore } from '@app/stores/technology.store';
import { Timeline } from './timeline';
import {
  mockNode,
  mockNodeTooltipComponent,
  mockPeriod,
  mockPeriodTooltipComponent,
} from '@mock/components/timeline.mocks';

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
      declarations: [MockTimelineTooltip],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: TechnologyStore, useValue: technologyStoreSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Timeline);
    component = fixture.componentInstance;
    component.nodeTooltipComponent = mockNodeTooltipComponent as any;
    component.periodTooltipComponent = mockPeriodTooltipComponent as any;
    component.nodeRadius = 5;
    component.lineWidth = 2;
    component.dotColor = '#FF0000';
  });

  it('should create', () => {
    // Act
    fixture.detectChanges();
    // Asserts
    expect(component).toBeTruthy();
  });

  it('should init dots and nodes when there is one version', () => {
    // Arrange
    (technologyStoreSpy as any).tech = signal(mockTechnologies[4]);
    // Act
    fixture.detectChanges();
    // Asserts
    expect(component).toBeTruthy();
  });

  /*
   * Interaction methods and events
   */
  it('should open version URL', () => {
    // Arrange
    spyOn(window, 'open');
    // Act
    component.openVersionUrl(mockNode);
    // Asserts
    expect(window.open).toHaveBeenCalledWith('http://example.com', '_blank');
  });
  it('should show version tooltip', () => {
    // Arrange
    const elementRef = document.createElement('circle');
    // Act
    component.showVersionTooltip(mockNode, elementRef);
    // Asserts
    expect(component.versionTooltipVisible).toBeTrue();
    expect(component.nodeTooltipComponent.showTooltip).toHaveBeenCalledWith(mockNode);
  });
  it('should hide version tooltip', () => {
    // Arrange
    const elementRef = document.createElement('circle');
    // Act
    component.hideVersionTooltip(elementRef);
    // Asserts
    expect(component.versionTooltipVisible).toBeFalse();
    expect(component.nodeTooltipComponent.hideTooltip).toHaveBeenCalled();
  });
  it('should show period tooltip', () => {
    // Arrange
    const elementRef = document.createElement('line');
    // Act
    component.showPeriodTooltip(mockPeriod, elementRef);
    // Asserts
    expect(component.periodTooltipVisible).toBeTrue();
    expect(component.periodTooltipComponent.showTooltip).toHaveBeenCalledWith(mockPeriod);
  });
  it('should hide period tooltip', () => {
    // Arrange
    const elementRef = document.createElement('line');
    // Act
    component.hidePeriodTooltip(elementRef);
    // Asserts
    expect(component.periodTooltipVisible).toBeFalse();
    expect(component.periodTooltipComponent.hideTooltip).toHaveBeenCalled();
  });
});
