import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard-menu', loadComponent: () => import('./dashboard-menu/dashboard-menu.component').then(m => m.DashboardMenuComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Here you can set up your configurations
    paramsInheritanceStrategy: 'always',
    urlUpdateStrategy: 'deferred',
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
