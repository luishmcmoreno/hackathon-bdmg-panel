import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsApproveComponent } from './projects-approve.component';

describe('ProjectsApproveComponent', () => {
  let component: ProjectsApproveComponent;
  let fixture: ComponentFixture<ProjectsApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
