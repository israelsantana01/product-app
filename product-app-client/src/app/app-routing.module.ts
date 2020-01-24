import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './pages/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin/products',
    pathMatch: 'full'
  },
  {
    path: 'admin/products',
    loadChildren: '../app/pages/products/products.module#ProductsModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: '../app/pages/auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
