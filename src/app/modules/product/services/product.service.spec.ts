import { TestBed, async, getTestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { PRODUCTS } from '../mocks/product-data.mock';

describe('Event Service tests', () => {
    let injector: TestBed;
    let httpTestingController: HttpTestingController;
    let productService: ProductService;

    beforeEach(async(() => {
        // fake module / sandbox module
        TestBed.configureTestingModule({
            imports: [
                // HttpClientModule,
                HttpClientTestingModule
            ],
            providers: [
                // unknow markup
                ProductService
            ]
        }).compileComponents();
        injector = getTestBed();
        httpTestingController = injector.get(HttpTestingController);
        productService = injector.get(ProductService);
    }));

    afterEach(() => {
        httpTestingController.verify();
    });

    // check service instance
    it('should inject service',
        inject([ProductService], (service) => {
            expect(service).toBeTruthy();
        })
    );

    // check service instance
    it('should inject service from variable', () => {
        expect(productService).toBeTruthy();
    });

    // check component instance
    it('should inject service', () => {
        // use a spy to intercept httpclient requests
        // let httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
        // httpSpy.get.and.returnValue([]);

        // or use the mock
        const req = httpTestingController.expectOne('http://localhost:3004/products');
        expect(req.request.method).toBe('GET');
        req.flush(PRODUCTS);
        // do request
        productService.getProducts().subscribe((data) => {
            // check data
            expect(data).toEqual(PRODUCTS);
        });
    }
    );


});
