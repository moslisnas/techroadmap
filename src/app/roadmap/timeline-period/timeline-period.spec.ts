import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinePeriod } from './timeline-period';

describe('TimelinePeriod', () => {
  let component: TimelinePeriod;
  let fixture: ComponentFixture<TimelinePeriod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelinePeriod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelinePeriod);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
