import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './_components/change-password/change-password.component';
import { HomepageComponent } from './_components/homepage/homepage.component';
import { LoginformComponent } from './_components/loginform/loginform.component';
import { NotFoundComponent } from './_components/not-found/not-found.component';
import { RegisterformComponent } from './_components/registerform/registerform.component';
import { AuthenticationGuard } from './_guards/authentication.guard';
import { PermissionsComponent } from './_components/permissions/permissions.component';
import { ProjectsComponent } from './_components/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthenticationGuard],
    children: [
      { path: 'register', component: RegisterformComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'home', component: HomepageComponent },
      { path: 'permissions', component: PermissionsComponent },
      { path: 'projects', component: ProjectsComponent },
    ],
  },
  { path: 'login', component: LoginformComponent },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
