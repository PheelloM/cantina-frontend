import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import Dish from 'src/app/model/dish.model';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-dish-create',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './dish-create.component.html',
  styleUrl: './dish-create.component.scss'
})
export class DishCreateComponent {
  dishForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dishService: DishService,
    private router: Router
  ) {
    this.dishForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      imageUrl: ['']
    });
  }

  onSubmit(): void {
    if (this.dishForm.valid) {
      const newDish: Dish = this.dishForm.value;
      this.dishService.createDish(newDish).subscribe(
        (createdDish) => {
          console.log('Dish created successfully', createdDish);
          this.router.navigate(['/dishes']); // Redirect to dish list
        },
        (error) => console.error('Error creating dish', error)
      );
    }
  }

}
