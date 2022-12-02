import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductsComponent } from './product/pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
