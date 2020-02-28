import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap, switchMap, take } from 'rxjs/operators';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private mProducts = new BehaviorSubject<Product[]>([]);
  private baseUrl = 'http://localhost:8080/products';

  get products(): Observable<Product[]> {
    return this.mProducts.asObservable();
  }

  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<any> {
    return this.http.get<Product[]>(this.baseUrl)
    .pipe(
      tap(products => {
        this.mProducts.next(products);
      })
    );
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  addProduct(product: Product, selectedImage?: File): Observable<any> {

    let observable = of({});

    if (selectedImage) {

      observable = observable.pipe(
        switchMap(() => {
          if (product.imageUrl) {
            return this.http.delete(`http://localhost:8080/images/${product.imageUrl}`);
          } else {
            return of({});
          }
        }),
        switchMap(() => {

          
            product.imageUrl = this.randomStr();
          

          const formData: FormData = new FormData();
          formData.append('pid', product.imageUrl);
          formData.append('file', selectedImage);

          return this.http.post(`http://localhost:8080/images`, formData, {
            responseType: 'text'
          });
        })
      );
    }

    return observable.pipe(
      switchMap(() => {
        return this.http.post<Product>(this.baseUrl, product);
      })
    );
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<Product>(`${this.baseUrl}/${id}`)
    .pipe(
      switchMap(() => {
        return this.products;
      }),
      take(1),
      tap(products => {
        const newProducts = products.filter(product => product.id !== id);
        this.mProducts.next(newProducts);
      })
    );
  }

  private randomStr() {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 14; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
  }
}
