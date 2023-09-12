import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCardsComponent } from './global-cards.component';

describe('GlobalCardsComponent', () => {
  let component: GlobalCardsComponent;
  let fixture: ComponentFixture<GlobalCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalCardsComponent]
    });
    fixture = TestBed.createComponent(GlobalCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
