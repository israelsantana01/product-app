import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
// import { timingSafeEqual } from 'crypto';
// import { Subject } from 'rxjs'; /***  I don't understand  ***/



@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ProductsPage implements OnInit {

  displayedColumns: string[] = ['id', 'description', 'price', 'barcode', 'actions'];
  dataSource: MatTableDataSource<Product>;


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
    this.productsService.fetchProducts().subscribe(products => {
      this.dataSource.data = products;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe(response => {
      console.log(response);
      this.dataSource.data = this.dataSource.data.filter(product => product.id !== response.id);
    });
  }

}
