import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinehtmltrialComponent } from './inlinehtmltrial.component';

describe('InlinehtmltrialComponent', () => {
  let component: InlinehtmltrialComponent;
  let fixture: ComponentFixture<InlinehtmltrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlinehtmltrialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InlinehtmltrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
