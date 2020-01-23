import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})

// tslint:disable-next-line: component-class-suffix
export class ProductsPage implements OnInit, OnDestroy {

  products: Product[];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.fetchProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(response => {
      this.products = this.products.filter(product => product.id !== response.id);
    });
  }

  ngOnDestroy() {
  }
}
