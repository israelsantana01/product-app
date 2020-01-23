import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPage } from './products.page';

import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage
  },
  {
    path: 'new',
    loadChildren: '../product-form/product-from.module#ProductFormModule'
  },
  {
    path: ':id',
    loadChildren: '../product-form/product-from.module#ProductFormModule'
  }
];

@NgModule({
  declarations: [ProductsPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule
  ]
})
export class ProductsModule { }
