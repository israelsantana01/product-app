import { ProductFormPage } from './product-form.page';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ProductFormPage
  }
];

@NgModule({
  declarations: [ProductFormPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class ProductFormModule { }
