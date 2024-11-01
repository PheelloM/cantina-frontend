import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import Dish from 'src/app/model/dish.model';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-dish-list',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './dish-list.component.html',
  styleUrl: './dish-list.component.scss'
})
export class DishListComponent implements OnInit {
  dishes: Dish[] = [];

  constructor(private dishesService: DishService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    debugger
    this.dishesService.getDishes().subscribe((data) => {
      this.dishes = data;
    });
  }

  viewDetails(id: number): void {
    // Navigate to the detail view with the dish ID
    debugger
    this.router.navigate(['/dish-detail', id]);
  }

  deleteDish(id: number): void {
    this.dishesService.deleteDish(id).subscribe(() => {
      console.log(`Dish with ID ${id} deleted successfully`);
      this.dishes = this.dishes.filter(dish => dish.id !== id);
    },
    (error) => console.error('Error deleting dish', error));
  }

}
