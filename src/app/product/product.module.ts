import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../shared/primeng/primeng.module';

import { CreateEditProductComponent } from './pages/create-edit-product/create-edit-product.component';
import { HomeProductComponent } from './pages/home-product/home-product.component';
import { ProductsToGalleryPipe } from '../shared/pipes/products-to-gallery.pipe';
import { ProductsComponent } from './pages/products/products.component';
import { CardComponent } from './components/card/card.component';
import { ProductRoutingModule } from './product-routing.module';
import { CropTextPipe } from '../shared/pipes/crop-text.pipe';
import { LayoutModule } from '../shared/components/layout/layout.module';

@NgModule({
  declarations: [
    CreateEditProductComponent,
    ProductsToGalleryPipe,
    HomeProductComponent,
    ProductsComponent,

    CardComponent,
    CropTextPipe,
  ],
  imports: [CommonModule, ProductRoutingModule, PrimengModule, LayoutModule],
})
export class ProductModule {}
