import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcherSection } from './searcher-section';

describe('SearcherSection', () => {
  let component: SearcherSection;
  let fixture: ComponentFixture<SearcherSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearcherSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearcherSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
