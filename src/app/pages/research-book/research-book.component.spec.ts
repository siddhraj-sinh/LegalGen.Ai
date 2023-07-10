import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchBookComponent } from './research-book.component';

describe('ResearchBookComponent', () => {
  let component: ResearchBookComponent;
  let fixture: ComponentFixture<ResearchBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchBookComponent]
    });
    fixture = TestBed.createComponent(ResearchBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
