import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS } from '../../mocks/product-data.mock';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { ProductResourceService } from '../../services/product-resource.service';
import { shareReplay, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = new Array();
  products$: Observable<Product[]>;

  productsShareReplay$: Observable<Product[]>;
  productsExpensiveShareReplay$: Observable<Product[]>;
  productsCheapShareReplay$: Observable<Product[]>;

  // DI
  constructor(
    private productService: ProductService,
    private productResourceService: ProductResourceService
  ) { }

  // Initialization
  ngOnInit() {
    this.loadProductsViaMock();
    this.loadWithResourcePatternService();
    // this.loadWithShareReplayAsync();
    this.loadWithShareReplaySubscribe();
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


  loadWithShareReplayAsync() {
    this.productsShareReplay$ = this.productResourceService.list().pipe(
      shareReplay(1)
    );

    this.productsExpensiveShareReplay$ = this.productsShareReplay$.pipe(
      map(products => products.filter(p => p.price >= 10))
    );

    this.productsExpensiveShareReplay$ = this.productsShareReplay$.pipe(
      map(products => products.filter(p => p.price <= 10))
    );
  }

  loadWithShareReplaySubscribe() {
    const productsReplay = this.productResourceService.list().pipe(
      shareReplay(1)
    );

    const productsExpensiveReplay = productsReplay.pipe(
      map(products => products.filter(p => p.price >= 10))
    );

    const productsCheapReplay = productsReplay.pipe(
      map(products => products.filter(p => p.price <= 10))
    );

    productsReplay.subscribe((r) => console.log(r));
    productsExpensiveReplay.subscribe((r) => console.log(r));
    productsCheapReplay.subscribe((r) => console.log(r));
  }


}
