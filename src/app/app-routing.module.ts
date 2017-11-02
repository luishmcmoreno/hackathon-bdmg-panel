import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './pages/login/login.component';
import { DashComponent } from './parts/dash/dash.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ProjectsApproveComponent } from './pages/projects-approve/projects-approve.component';
import { ProjectsToApproveComponent } from './pages/projects-to-approve/projects-to-approve.component';
import { BalanceComponent } from './pages/balance/balance.component';
import { ProjectApprovedDetailComponent } from './pages/project-approved-detail/project-approved-detail.component';
import { ProjectToApproveDetailComponent } from './pages/project-to-approve-detail/project-to-approve-detail.component';

// Guards
import { UnauthenticatedGuard } from './guards/unauthenticated/unauthenticated.guard';
import { AuthenticatedGuard } from './guards/authenticated/authenticated.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/balance',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnauthenticatedGuard]
  },
  {
    path: 'forgot',
    component: ForgotPasswordComponent,
    canActivate: [UnauthenticatedGuard]
  },
  {
    path: '',
    component: DashComponent,
    canActivate: [AuthenticatedGuard],
    children: [
      { component: BalanceComponent, path: 'balance' },
      { component: ProjectsToApproveComponent, path: 'projects-to-approve' },
      { component: ProjectToApproveDetailComponent, path: 'projects-to-approve/:id' },
      { component: ProjectsApproveComponent, path: 'projects-approve' },
      { component: ProjectApprovedDetailComponent, path: 'projects-approve/:id' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
