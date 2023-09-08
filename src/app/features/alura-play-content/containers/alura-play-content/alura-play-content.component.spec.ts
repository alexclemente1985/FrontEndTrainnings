import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluraPlayContentComponent } from './alura-play-content.component';

describe('AluraPlayContentComponent', () => {
  let component: AluraPlayContentComponent;
  let fixture: ComponentFixture<AluraPlayContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AluraPlayContentComponent]
    });
    fixture = TestBed.createComponent(AluraPlayContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
