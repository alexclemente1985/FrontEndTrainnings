import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluraPlayHeaderComponent } from './alura-play-header.component';

describe('AluraPlayHeaderComponent', () => {
  let component: AluraPlayHeaderComponent;
  let fixture: ComponentFixture<AluraPlayHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AluraPlayHeaderComponent]
    });
    fixture = TestBed.createComponent(AluraPlayHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
