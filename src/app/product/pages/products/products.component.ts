import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private readonly productService: ProductService) {}

  products: Product[] = [];
  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      console.log('products', products);
    });
  }
}
