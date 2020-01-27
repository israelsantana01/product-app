import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products.model';
import { Subject } from 'rxjs'; /***  I don't understand  ***/

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})

// tslint:disable-next-line: component-class-suffix
export class ProductsPage implements OnInit, OnDestroy {

  dtTrigger = new Subject(); /***  I don't understand  ***/
  products: Product[];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.fetchProducts().subscribe(products => {
      this.products = products;
      this.dtTrigger.next(); /***  I don't understand  ***/
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(response => {
      this.products = this.products.filter(product => product.id !== response.id);
    });
  }

  ngOnDestroy() { /***  I don't understand  ***/
    this.dtTrigger.unsubscribe(); /***  I don't understand  ***/
  }
}
