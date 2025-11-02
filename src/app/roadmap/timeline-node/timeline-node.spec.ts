import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockNode } from '@mock/components/timeline.mocks';
import { TimelineNode } from './timeline-node';

describe('TimelineNode', () => {
  let component: TimelineNode;
  let fixture: ComponentFixture<TimelineNode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineNode],
    }).compileComponents();

    fixture = TestBed.createComponent(TimelineNode);
    component = fixture.componentInstance;
    component.node = mockNode;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
