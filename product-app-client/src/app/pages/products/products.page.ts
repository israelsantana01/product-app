import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ProductsPage implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'description', 'price', 'barcode', 'actions'];
  dataSource: MatTableDataSource<Product>;
  subscription: Subscription;

  @ViewChild('paginator', {static: true}) paginator: MatPaginator;
  @ViewChild('sort', {static: true}) sort: MatSort;

  products: Product[];

  constructor(
    private productsService: ProductsService
  ) { }


  ngOnInit() {
    this.dataSource = new MatTableDataSource<Product>();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.subscription = this.productsService.products.subscribe(products => {
      this.dataSource.data = products;
      console.log(products);
    });

    this.productsService.fetchProducts().subscribe();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe();
  }

}
