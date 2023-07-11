import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchDashboardComponent } from './research-dashboard.component';

describe('ResearchDashboardComponent', () => {
  let component: ResearchDashboardComponent;
  let fixture: ComponentFixture<ResearchDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchDashboardComponent]
    });
    fixture = TestBed.createComponent(ResearchDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
