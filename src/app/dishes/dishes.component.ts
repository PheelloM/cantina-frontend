import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DishListComponent } from './dish-list/dish-list.component';
import { DishSearchComponent } from './dish-search/dish-search.component';
import { CommonModule } from '@angular/common';
import { DishCreateComponent } from './dish-create/dish-create.component';

@Component({
  selector: 'app-dishes',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, HttpClientModule, DishSearchComponent, DishListComponent, DishCreateComponent, CommonModule],
  templateUrl: './dishes.component.html',
  styleUrl: './dishes.component.scss'
})
export class DishesComponent {

}
