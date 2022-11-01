import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { LoginformComponent } from './_components/loginform/loginform.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomepageComponent } from './_components/homepage/homepage.component';
import { RegisterformComponent } from './_components/registerform/registerform.component';
import { ChangePasswordComponent } from './_components/change-password/change-password.component';
import { ToastrModule } from 'ngx-toastr';
import { NotFoundComponent } from './_components/not-found/not-found.component';
import { PermissionsComponent } from './_components/permissions/permissions.component';
import { ProjectsComponent } from './_components/projects/projects.component';
import { PermissionsFormComponent } from './_components/permissions-form/permissions-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginformComponent,
    HomepageComponent,
    RegisterformComponent,
    ChangePasswordComponent,
    NotFoundComponent,
    PermissionsComponent,
    ProjectsComponent,
    PermissionsFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
