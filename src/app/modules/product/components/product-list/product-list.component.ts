import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS } from '../../mocks/product-data.mock';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  products: Product[] = new Array();
  products$: Observable<Product[]>;

  // DI
  constructor(private productService: ProductService) { }

  // Initialization
  ngOnInit() {
    // via mock
    // this.products = PRODUCTS;

    // subscribe
    this.productService.getProducts().subscribe(
      (data) => this.products = data
    );

    // async
    this.products$ = this.productService.getProducts();
  }

}
