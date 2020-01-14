import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = 'http://localhost:8080/products'; //Url to web api.
  constructor(
    private http: HttpClient
    ) { }

    getProduct(id: number): Observable<Product> {

      const url = `${this.baseUrl}/${id}`;
      return this.http.get<Product>(url).pipe(
        tap(_ => console.log('Fetched Products'))
      );
    }

    listProducts() : Observable<Product[]> {
      return this.http.get<Product[]>(this.baseUrl);
    }
}
