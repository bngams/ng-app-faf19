import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, from, Observable } from 'rxjs';
import { map, filter, reduce } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { ResourceService } from '../../api/resource.service';


@Injectable({
    providedIn: 'root'
})
export class ProductResourceService extends ResourceService<number, Product> {

    // DI
    // HttpClient => @Injectable => HttpClientModule
    constructor(private http: HttpClient) {
        super(http, 'products');
    }

}
