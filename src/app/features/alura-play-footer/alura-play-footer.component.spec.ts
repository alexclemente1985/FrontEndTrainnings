import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluraPlayFooterComponent } from './alura-play-footer.component';

describe('AluraPlayFooterComponent', () => {
  let component: AluraPlayFooterComponent;
  let fixture: ComponentFixture<AluraPlayFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AluraPlayFooterComponent]
    });
    fixture = TestBed.createComponent(AluraPlayFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
