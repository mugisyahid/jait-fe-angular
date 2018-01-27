import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {Product} from '../shared/product.model';
import {ProductService} from '../shared/product.service';


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

    products: Product[];

    constructor(private productService: ProductService, private translate: TranslateService, public router: Router) {
        this.translate.addLangs(['en', 'id']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|id/) ? browserLang : 'en');

        this.productService.getProducts().subscribe((products: Product[]) => {
            this.products = products;
        });

    }

}
