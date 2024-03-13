import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinestyletrialComponent } from './inlinestyletrial.component';

describe('InlinestyletrialComponent', () => {
  let component: InlinestyletrialComponent;
  let fixture: ComponentFixture<InlinestyletrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlinestyletrialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InlinestyletrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
