import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  products: Product[] = [];
  
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  this.listProducts();
  }

  listProducts() {
    this.productsService.listProducts().subscribe(products =>{
      this.products = products;

      console.log(products);
    });
  }
}
