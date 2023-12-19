import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpOneComponent } from './tp-one.component';

describe('TpOneComponent', () => {
  let component: TpOneComponent;
  let fixture: ComponentFixture<TpOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TpOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TpOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
