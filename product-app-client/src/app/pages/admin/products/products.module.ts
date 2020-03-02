import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPage } from './products.page';

import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from 'src/app/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage
  },
  {
    path: 'new',
    loadChildren: () => import ('../product-form/product-form.module').then(m => m.ProductFormPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import ('../product-form/product-form.module').then(m => m.ProductFormPageModule)
  }
];

@NgModule({
  declarations: [ProductsPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule,
    SharedModule
  ]
})
export class ProductsPageModule { }
