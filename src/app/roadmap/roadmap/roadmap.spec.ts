import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Roadmap } from './roadmap';

describe('Roadmap', () => {
  let component: Roadmap;
  let fixture: ComponentFixture<Roadmap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Roadmap],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Roadmap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
