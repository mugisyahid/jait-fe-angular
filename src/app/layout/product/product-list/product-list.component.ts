import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {Product} from '../shared/product.model';
import {ProductService} from '../shared/product.service';
import {AuthGuard} from '../../../shared/guard/auth.guard';
import {AppConfig} from '../../../config/app.config';
import {routerTransition} from '../../../router.animations';
import {isUndefined} from 'util';


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
    // animations: [routerTransition()]
})
export class ProductListComponent {

    products: Product[];

    constructor(private productService: ProductService, private translate: TranslateService, public router: Router,
                private authGuard: AuthGuard) {
        this.translate.addLangs(['en', 'id']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|id/) ? browserLang : 'en');

        this.productService.getProducts().subscribe((products: Product[]) => {
            this.products = products;
        });

    }

    createProduct() {
        this.router.navigateByUrl('/product/create');
    }
}
