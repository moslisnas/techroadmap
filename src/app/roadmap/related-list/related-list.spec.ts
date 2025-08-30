import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedList } from './related-list';

describe('RelatedList', () => {
  let component: RelatedList;
  let fixture: ComponentFixture<RelatedList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedList],
    }).compileComponents();

    fixture = TestBed.createComponent(RelatedList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
