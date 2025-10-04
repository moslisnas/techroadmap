import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SearcherSection } from './searcher-section';

describe('SearcherSection', () => {
  let component: SearcherSection;
  let fixture: ComponentFixture<SearcherSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearcherSection],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(SearcherSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
