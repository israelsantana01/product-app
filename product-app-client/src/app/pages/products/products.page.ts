import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from './products.service';
import { Product } from './products.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})

// tslint:disable-next-line: component-class-suffix
export class ProductsPage implements OnInit, OnDestroy{

  products: Product[];
  subs: Subscription;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.products.subscribe(products =>{
      this.products = products;
    });

    this.productService.fetchProducts().subscribe();
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
