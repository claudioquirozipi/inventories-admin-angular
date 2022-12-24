import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../shared/primeng/primeng.module';

import { HomeProductComponent } from './pages/home-product/home-product.component';
import { ProductsComponent } from './pages/products/products.component';

import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [HomeProductComponent, ProductsComponent],
  imports: [CommonModule, ProductRoutingModule, PrimengModule],
})
export class ProductModule {}
