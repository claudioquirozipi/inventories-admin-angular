import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/product/interfaces/product';
import { ProductsToGallery } from './products-to-gallery';

@Pipe({
  name: 'productsToGallery',
})
export class ProductsToGalleryPipe implements PipeTransform {
  transform(product: Product): ProductsToGallery[] {
    const response: ProductsToGallery[] = product?.images.map((image) => ({
      previewImageSrc: 'http://localhost:5000/image/products/' + image,
      thumbnailImageSrc: 'http://localhost:5000/image/products/' + image,
      alt: product.title,
      title: product.title,
    }));
    return response;
  }
}
