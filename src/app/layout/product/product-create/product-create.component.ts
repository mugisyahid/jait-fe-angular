import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {ProductService} from '../shared/product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {routerTransition} from '../../../router.animations';
import {Product} from '../shared/product.model';
import {AuthGuard} from '../../../shared/guard/auth.guard';


@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.scss'],
    // animations: [routerTransition()]
})
export class ProductCreateComponent {

    productForm: FormGroup;
    error: string;

    constructor(private productService: ProductService, private translate: TranslateService, public router: Router,
                private formBuilder: FormBuilder, private authGuard: AuthGuard) {
        this.translate.addLangs(['en', 'id']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|id/) ? browserLang : 'en');

        this.productForm = this.formBuilder.group({
            'name': ['', [Validators.required]],
            'price': ['', [Validators.required]],
            'quantity': ['', [Validators.required]],
            'description': ['', [Validators.required]]
        });
    }

    create(prod: Product) {
        this.productService.createProduct(prod, this.authGuard.getUserId()).subscribe((res) => {
            this.router.navigateByUrl('/product/list');
        }, (response: Response) => {
            if (response.status !== 200) {
                this.error = 'Somethings error!';
            }
        });
    }
}
