import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectToApproveDetailComponent } from './project-to-approve-detail.component';

describe('ProjectToApproveDetailComponent', () => {
  let component: ProjectToApproveDetailComponent;
  let fixture: ComponentFixture<ProjectToApproveDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectToApproveDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectToApproveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
