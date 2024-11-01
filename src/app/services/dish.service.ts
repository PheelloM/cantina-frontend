import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import  Dish  from "src/app/model/dish.model";
import { AuthService } from "../auth/auth.service";


@Injectable({
    providedIn: 'root'
  })
  export class DishService {
    private apiUrl = 'http://localhost:8080/api/dishes';
  
    constructor(private http: HttpClient, private authService: AuthService) {}
  
    getDishes(): Observable<Dish[]> {
        const token = this.authService.getToken(); // Get the token

    // Set the headers with the token and include the token in the Authorization header
        const headers = token ? new HttpHeaders({ 'Authorization': `Bearer ${token}` }) : undefined;
        
      return this.http.get<Dish[]>(this.apiUrl, { headers });
    }
  
    getDish(id: number): Observable<Dish> {
      return this.http.get<Dish>(`${this.apiUrl}/${id}`);
    }
  
    createDish(dish: Dish): Observable<Dish> {
      return this.http.post<Dish>(this.apiUrl, dish);
    }
  
    updateDish(id: number, dish: Dish): Observable<Dish> {
      return this.http.put<Dish>(`${this.apiUrl}/${id}`, dish);
    }
  
    deleteDish(id: number): Observable<void> {
        const token = this.authService.getToken(); // Get the token

    // Set the headers with the token and include the token in the Authorization header
        const headers = token ? new HttpHeaders({ 'Authorization': `Bearer ${token}` }) : undefined;
      return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
    }
  }