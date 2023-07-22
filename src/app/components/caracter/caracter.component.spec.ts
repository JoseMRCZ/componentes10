import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracterComponent } from './caracter.component';

describe('CaracterComponent', () => {
  let component: CaracterComponent;
  let fixture: ComponentFixture<CaracterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaracterComponent]
    });
    fixture = TestBed.createComponent(CaracterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
