import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedSection } from './related-section';

describe('RelatedSection', () => {
  let component: RelatedSection;
  let fixture: ComponentFixture<RelatedSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
