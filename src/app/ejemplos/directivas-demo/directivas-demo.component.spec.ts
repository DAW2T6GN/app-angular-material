import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasDemoComponent } from './directivas-demo.component';

describe('DirectivasDemoComponent', () => {
  let component: DirectivasDemoComponent;
  let fixture: ComponentFixture<DirectivasDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivasDemoComponent]
    });
    fixture = TestBed.createComponent(DirectivasDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
