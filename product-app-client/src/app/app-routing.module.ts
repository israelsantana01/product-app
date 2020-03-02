import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './pages/auth/auth.guard';
import { AuthPageModule } from './pages/auth/auth.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/explore',
    pathMatch: 'full'
  },
  {
    path: 'admin/products',
    loadChildren: () => import ('../app/pages/admin/products/products.module').then(m => m.ProductsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import ('../app/pages/auth/auth.module').then(m => AuthPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import ('./pages/explore/explore.module').then(m => m.ExplorePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
