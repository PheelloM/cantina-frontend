import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
  })
  export class AuthService {
    baseUrl = 'http://localhost:8080/api/auth';

    constructor(private httpClient: HttpClient) { }

    signup(data: any) {
        return this.httpClient.post(`${this.baseUrl}/register`, data);
    }

    login(data: any) {
        return this.httpClient.post(`${this.baseUrl}/login`, data, { responseType: 'text' })
          .pipe(tap((token : string) => {
            debugger
            if(token)
            localStorage.setItem('token', token);
        }));
    }

    logout() {
        localStorage.removeItem('token');
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

    getToken(): string | null {
        return localStorage.getItem('token');
      }
    
  }