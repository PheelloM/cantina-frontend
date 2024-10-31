import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  
    signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })

    constructor(private authService: AuthService, private router: Router) {}

    public onSubmit() {
      if (this.signupForm.valid) {
        console.log(this.signupForm.value);
        this.authService.signup(this.signupForm.value)
          .subscribe({
            next: (data: any) => {
              console.log(data);
              this.router.navigate(['/login']);
            },
            error: (err) => console.log(err)
          });
      }
    }

}
