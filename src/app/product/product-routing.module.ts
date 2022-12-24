import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeProductComponent } from './pages/home-product/home-product.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeProductComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
      },

      {
        path: '**',
        redirectTo: 'products',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
