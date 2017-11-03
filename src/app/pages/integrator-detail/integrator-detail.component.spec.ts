import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratorDetailComponent } from './integrator-detail.component';

describe('IntegratorDetailComponent', () => {
  let component: IntegratorDetailComponent;
  let fixture: ComponentFixture<IntegratorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegratorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegratorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
