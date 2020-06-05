import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../../services/product.service';
import { ProductResourceService } from '../../services/product-resource.service';

describe('AppComponent', () => {
    const spyProductService = jasmine.createSpyObj('productService', ['getProducts']);
    const spyProductResourceService = jasmine.createSpyObj('productResourceService', ['list']);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
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
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });


});
