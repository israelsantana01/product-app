import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<any> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/${id}`);
  }
}
