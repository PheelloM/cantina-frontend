import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DishesComponent } from './dishes/dishes.component';
//import { TokenInterceptor } from './auth/token.interceptor';
import { DishListComponent } from './dishes/dish-list/dish-list.component';
import { DishSearchComponent } from './dishes/dish-search/dish-search.component';
import { DishDetailComponent } from './dishes/dish-detail/dish-detail.component';
import { DishCreateComponent } from './dishes/dish-create/dish-create.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginComponent,
    RegisterComponent,
    DashboardMenuComponent,
    DishesComponent,
    DishListComponent,
    DishSearchComponent,
    DishDetailComponent,
    DishCreateComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
