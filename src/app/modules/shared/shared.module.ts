import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../product/services/product.service';



@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    ProductService
  ]
})
export class SharedModule { }
