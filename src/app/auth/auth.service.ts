import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
  })
  export class AuthService {
    //httpClient = inject(HttpClient);
    baseUrl = 'http://localhost:8080/api';

    constructor(private httpClient: HttpClient) { }

    signup(data: any) {
        return this.httpClient.post(`${this.baseUrl}/register`, data);
    }

    login(data: any) {
        return this.httpClient.post(`${this.baseUrl}/login`, data)
          .pipe(tap((result) => {
            localStorage.setItem('authUser', JSON.stringify(result));
        }));
    }

    logout() {
        localStorage.removeItem('authUser');
    }

    isLoggedIn() {
        return localStorage.getItem('authUser') !== null;
    }
    
  }