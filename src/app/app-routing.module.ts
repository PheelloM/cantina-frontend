import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
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
