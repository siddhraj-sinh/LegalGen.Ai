import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceFiltersComponent } from './advance-filters.component';

describe('AdvanceFiltersComponent', () => {
  let component: AdvanceFiltersComponent;
  let fixture: ComponentFixture<AdvanceFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvanceFiltersComponent]
    });
    fixture = TestBed.createComponent(AdvanceFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
