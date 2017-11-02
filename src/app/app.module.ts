// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Other Modules
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AuthServiceModule } from '@pluritech/auth-service';
import { ServerServiceModule } from '@pluritech/server-service';
import { Ng2MaskModule } from 'ng2-mask';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { FileUploadModule } from 'ng2-file-upload/file-upload/file-upload.module';
import { ToasterModule } from 'angular2-toaster';
import { PaginationModule } from '@pluritech/pagination';
import { QuillModule } from 'ngx-quill';
import { Ng2TableModule } from '@pluritech/ng2-responsive-table';
import { DialogServiceModule } from '@pluritech/dialog-service';

// Configurations Files
import { configuration } from './configuration';

// Parts
import { DashComponent } from './parts/dash/dash.component';

//  Pages
import { LoginComponent } from './pages/login/login.component';

// Router config
import { AppRoutingModule } from './app-routing.module';

// Services
import { LoginService } from './providers/login/login.service';

// Guards
import { UnauthenticatedGuard } from './guards/unauthenticated/unauthenticated.guard';
import { AuthenticatedGuard } from './guards/authenticated/authenticated.guard';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

// Pipes
import { DatePipe } from '@angular/common';

// Component
import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ContentLoaderComponent } from './components/content-loader/content-loader.component';
import { BalanceComponent } from './pages/balance/balance.component';
import { ProjectsApproveComponent } from './pages/projects-approve/projects-approve.component';
import { ProjectsToApproveComponent } from './pages/projects-to-approve/projects-to-approve.component';
import { ProjectToApproveDetailComponent } from './pages/project-to-approve-detail/project-to-approve-detail.component';
import { ImgModalComponent } from './components/img-modal/img-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    ForgotPasswordComponent,
    LoaderComponent,
    ContentLoaderComponent,
    BalanceComponent,
    ProjectsApproveComponent,
    ProjectsToApproveComponent,
    ProjectToApproveDetailComponent,
    ImgModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    AuthServiceModule.forRoot(configuration.localStorageKey),
    ServerServiceModule.forRoot(),
    ReactiveFormsModule,
    Ng2MaskModule,
    PaginationModule,
    BootstrapModalModule,
    FileUploadModule,
    ToasterModule,
    QuillModule,
    Ng2TableModule,
    DialogServiceModule.forRoot()
  ],
  entryComponents: [
    ImgModalComponent
  ],
  providers: [
    LoginService,
    AuthenticatedGuard,
    UnauthenticatedGuard,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
