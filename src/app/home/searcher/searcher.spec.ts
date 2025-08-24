import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Searcher } from './searcher';

describe('Searcher', () => {
  let component: Searcher;
  let fixture: ComponentFixture<Searcher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Searcher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Searcher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
