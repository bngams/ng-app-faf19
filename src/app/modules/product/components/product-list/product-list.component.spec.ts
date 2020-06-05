import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../../services/product.service';
import { ProductResourceService } from '../../services/product-resource.service';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from '../../mocks/product-data.mock';

describe('AppComponent', () => {
    const spyProductService = jasmine.createSpyObj('productService', ['getProducts']);
    const spyProductResourceService = jasmine.createSpyObj('productResourceService', ['list']);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            declarations: [
                ProductListComponent
            ],
            providers: [
                {
                    provide: ProductService,
                    useValue: spyProductService
                },
                {
                    provide: ProductResourceService,
                    useValue: spyProductResourceService
                }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    it('should create the app and get component instance', () => {
        const fixture = TestBed.createComponent(ProductListComponent);
        const plist = fixture.debugElement.componentInstance;
        expect(plist).toBeTruthy();
    });

    it('should initialize products', () => {
        // comp instance
        const fixture = TestBed.createComponent(ProductListComponent);
        const plist = fixture.debugElement.componentInstance;
        // list() call
        spyProductResourceService.list.and.returnValue(of(PRODUCTS));
        // call method
        plist.loadWithResourcePatternService();
        // check result
        plist.products$.subscribe((r) => {
            expect(r).toEqual(PRODUCTS);
        });
    });


});
