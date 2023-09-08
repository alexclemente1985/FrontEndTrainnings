import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperiorSectionComponent } from './superior-section.component';

describe('SuperiorSectionComponent', () => {
  let component: SuperiorSectionComponent;
  let fixture: ComponentFixture<SuperiorSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperiorSectionComponent]
    });
    fixture = TestBed.createComponent(SuperiorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
