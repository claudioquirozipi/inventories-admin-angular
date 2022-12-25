import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CreateEditProductComponent } from './pages/create-edit-product/create-edit-product.component';
import { HomeProductComponent } from './pages/home-product/home-product.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeProductComponent,
    children: [
      {
        path: 'productos',
        component: ProductsComponent,
      },
      {
        path: 'productos/crear',
        component: CreateEditProductComponent,
      },
      {
        path: 'productos/editar/:slug',
        component: CreateEditProductComponent,
      },
      {
        path: '**',
        redirectTo: 'productos',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
