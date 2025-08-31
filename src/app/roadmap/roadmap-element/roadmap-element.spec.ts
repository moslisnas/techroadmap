import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Technology } from '@app/models/Technology.model';
import { RoadmapElement } from './roadmap-element';

describe('RoadmapElement', () => {
  let component: RoadmapElement;
  let fixture: ComponentFixture<RoadmapElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadmapElement],
    }).compileComponents();

    fixture = TestBed.createComponent(RoadmapElement);
    component = fixture.componentInstance;
    component.tech = {
      name: 'Angular',
      description: '',
      url: '',
      logo: '',
      versions: [],
    } as Technology;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
