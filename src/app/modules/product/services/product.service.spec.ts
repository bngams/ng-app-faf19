import { TestBed, async, getTestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';

describe('Event Service tests', () => {
    let injector: TestBed;
    let httpTestingController: HttpTestingController;
    let productService: ProductService;

    beforeEach(async(() => {
        // fake module / sandbox module
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
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

    // check component instance
    it('should should inject service',
        inject([ProductService], (service) => {
            expect(service).toBeTruthy();
        })
    );

    // check component instance
    it('should should inject service', () => {
        // use a spy to intercept httpclient requests
        // let httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
        // httpSpy.get.and.returnValue([]);

        // or use the mock
        const req = httpTestingController.expectOne('http://localhost:3004/events');
        expect(req.request.method).toBe('GET');
        req.flush([{
            // set result
        }]);
        // do request 
        productService.getProducts().subscribe((data) => {
            // check data
        });
    }
    );


});
