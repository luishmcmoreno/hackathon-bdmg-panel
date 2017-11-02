import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectApprovedDetailComponent } from './project-approved-detail.component';

describe('ProjectApprovedDetailComponent', () => {
  let component: ProjectApprovedDetailComponent;
  let fixture: ComponentFixture<ProjectApprovedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectApprovedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectApprovedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
