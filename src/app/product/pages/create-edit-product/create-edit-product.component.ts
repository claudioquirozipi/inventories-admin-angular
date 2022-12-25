import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-create-edit-product',
  templateUrl: './create-edit-product.component.html',
  styleUrls: ['./create-edit-product.component.css'],
})
export class CreateEditProductComponent {
  constructor(
    private route: ActivatedRoute,
    private readonly productService: ProductService
  ) {}

  slug: string = '';
  product!: Product;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['slug']) {
        this.slug = params['slug'];
        this.productService
          .getProductBySlug(this.slug)
          .subscribe((product) => (this.product = product));
      }
    });
  }
}
