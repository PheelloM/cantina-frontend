import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DishesComponent } from './dishes/dishes.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('src/app/login/login.component').then(d => d.LoginComponent) },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard-menu', loadComponent: () => import('./dashboard-menu/dashboard-menu.component').then(m => m.DashboardMenuComponent) },
  { path: 'dishes', component: DishesComponent },
  { path: 'dish-detail/:id', loadComponent: () => import('src/app/dishes/dish-detail/dish-detail.component').then(d => d.DishDetailComponent) },
  { path: 'dish-create', loadComponent: () => import('src/app/dishes/dish-create/dish-create.component').then(d => d.DishCreateComponent) },
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
