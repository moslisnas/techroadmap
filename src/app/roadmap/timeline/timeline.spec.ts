import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { MockTimelineTooltip } from '@mock/components/timeline-tooltip.mocks';
import TechMockData from '@mock/TechData';
import { mockNodes, mockPeriods } from '@mock/components/timeline.mocks';
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
      declarations: [MockTimelineTooltip],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: TechnologyStore, useValue: technologyStoreSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Timeline);
    component = fixture.componentInstance;
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

  it('should recalculate layout when window is resized', () => {
    // Arrange
    const calculateNodesPerRowSpy = spyOn(component, 'calculateNodesPerRow');
    const generateGridTemplateColumnsSpy = spyOn(
      component,
      'generateGridTemplateColumns'
    ).and.returnValue('repeat(3, 1fr)');
    const updateGridAreasSpy = spyOn(component, 'updateGridAreas');
    const updatePeriodDirectionsAndStylesSpy = spyOn(component, 'updatePeriodDirectionsAndStyles');
    // Act
    window.dispatchEvent(new Event('resize'));
    // Assert
    expect(calculateNodesPerRowSpy).toHaveBeenCalled();
    expect(generateGridTemplateColumnsSpy).toHaveBeenCalledWith(component.nodesPerRow);
    expect(component.gridTemplateColumns).toBe('repeat(3, 1fr)');
    expect(updateGridAreasSpy).toHaveBeenCalled();
    expect(updatePeriodDirectionsAndStylesSpy).toHaveBeenCalled();
  });

  it('should update gridArea for all nodes and periods', () => {
    // Arrange
    component.nodes = mockNodes;
    component.periods = mockPeriods;
    const createNodeGridAreasSpy = spyOn(component, 'createNodeGridAreas').and.callFake(
      (i: number) => `node-${i}`
    );
    const createPeriodGridAreasSpy = spyOn(component, 'createPeriodGridAreas').and.callFake(
      (i: number) => `period-${i}`
    );
    // Act
    component.updateGridAreas();
    // Assert
    expect(createNodeGridAreasSpy).toHaveBeenCalledTimes(6);
    expect(createPeriodGridAreasSpy).toHaveBeenCalledTimes(5);
    expect(component.nodes[0].gridArea).toBe('node-0');
    expect(component.nodes[2].gridArea).toBe('node-2');
    expect(component.periods[0].gridArea).toBe('period-0');
    expect(component.periods[1].gridArea).toBe('period-1');
  });

  it('should set correct direction and styleType for periods', () => {
    // Arrange
    component.nodesPerRow = 3;
    component.nodes = mockNodes;
    component.periods = mockPeriods;
    // Act
    component.updatePeriodDirectionsAndStyles();
    // Assert
    // Alternate direction (right / left)
    expect(component.periods[0].direction).toBe('right');
    expect(component.periods[1].direction).toBe('right');
    expect(component.periods[2].direction).toBe('right');
    expect(component.periods[3].direction).toBe('left');
    expect(component.periods[4].direction).toBe('left');
    // Curved style when (i+1)%nodesPerRow === 0 and straight otherwise
    expect(component.periods[0].styleType).toBe('straight');
    expect(component.periods[1].styleType).toBe('straight');
    expect(component.periods[2].styleType).toBe('curved');
    expect(component.periods[3].styleType).toBe('straight');
    expect(component.periods[4].styleType).toBe('straight');
  });
});
