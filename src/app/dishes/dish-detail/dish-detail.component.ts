import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import Dish from 'src/app/model/dish.model';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-dish-detail',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './dish-detail.component.html',
  styleUrl: './dish-detail.component.scss'
})
export class DishDetailComponent implements OnInit {
  dish!: Dish;

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService
  ) {}

  ngOnInit(): void {
    debugger
    const id = Number(this.route.snapshot.paramMap.get('id')); // Get the dish ID from the route
    this.loadDish(id); // Load the dish details
  }

  private loadDish(id: number): void {
    debugger
    this.dishService.getDish(id).subscribe({
      next: (dish) => this.dish = dish,
      error: (err) => console.error(err) // Handle error
    });
  }

}
