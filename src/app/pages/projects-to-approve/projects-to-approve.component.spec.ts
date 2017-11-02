import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsToApproveComponent } from './projects-to-approve.component';

describe('ProjectsToApproveComponent', () => {
  let component: ProjectsToApproveComponent;
  let fixture: ComponentFixture<ProjectsToApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsToApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsToApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
