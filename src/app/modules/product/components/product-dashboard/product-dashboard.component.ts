import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit, AfterViewInit {

  // component instance
  @ViewChild(ProductListComponent, { static: false })
  productList: ProductListComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  handleProductSubmit(p: Product) {
    // products de app-product-list
    this.productList.products.push(p);
  }

}
