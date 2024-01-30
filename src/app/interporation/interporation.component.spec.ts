import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterporationComponent } from './interporation.component';

describe('InterporationComponent', () => {
  let component: InterporationComponent;
  let fixture: ComponentFixture<InterporationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterporationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterporationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
