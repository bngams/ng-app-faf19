import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS } from '../../mocks/product-data.mock';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { ProductResourceService } from '../../services/product-resource.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  products: Product[] = new Array();
  products$: Observable<Product[]>;

  // DI
  constructor(
    private productService: ProductService,
    private productResourceService: ProductResourceService
  ) { }

  // Initialization
  ngOnInit() {
    this.loadWithResourcePatternService();
  }

  loadProductsViaMock() {
    // via mock
    this.products = PRODUCTS;
  }

  loadWithProductServiceAndObvservable() {
    // subscribe
    this.productService.getProducts().subscribe(
      (data) => this.products = data
    );
  }

  loadWithResourcePatternService() {
    // async
    this.products$ = this.productResourceService.list();
  }

}
