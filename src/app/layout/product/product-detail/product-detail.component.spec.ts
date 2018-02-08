import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ProductCreateComponent} from "./product-detail.component";


describe('ProductCreateComponent', () => {
    let component: ProductCreateComponent;
    let fixture: ComponentFixture<ProductCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductCreateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
