import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  // private apiUrl = 'http://127.0.0.1:8000/';  // URL de votre API

  // constructor(private http: HttpClient) { }

  // getCategories(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}categories`);
  // }

  // getSubcategories(category: string): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}subcategories/${category}`);
  // }

  // getPrices(subcategory: string): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}prices/${subcategory}`);
  // }
}
