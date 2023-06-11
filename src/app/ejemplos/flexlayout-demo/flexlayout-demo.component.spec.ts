import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexlayoutDemoComponent } from './flexlayout-demo.component';

describe('FlexlayoutDemoComponent', () => {
  let component: FlexlayoutDemoComponent;
  let fixture: ComponentFixture<FlexlayoutDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlexlayoutDemoComponent]
    });
    fixture = TestBed.createComponent(FlexlayoutDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
