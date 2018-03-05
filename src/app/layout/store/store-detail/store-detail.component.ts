import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {Product} from '../../product/shared/product.model';
import {ProductService} from '../../product/shared/product.service';
import {Store} from '../shared/store.model';
import {StoreService} from '../shared/store.service';
import {routerTransition} from '../../../router.animations';
import {isNull, isNullOrUndefined, isUndefined} from 'util';
import {AuthGuard} from "../../../shared/guard/auth.guard";


@Component({
    selector: 'app-store-detail',
    templateUrl: './store-detail.component.html',
    styleUrls: ['./store-detail.component.scss'],
    // animations: [routerTransition()]
})
export class StoreDetailComponent {

    bannerUrl: string;
    bannerLabel: string;
    bannerText: string;
    store: Store;
    products: Product[];

    constructor(private storeService: StoreService, private productService: ProductService,
                private authGuard: AuthGuard,
                private translate: TranslateService, public router: Router) {
        this.translate.addLangs(['en', 'id']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|id/) ? browserLang : 'en');

        this.storeService.getUserStore().subscribe((store) => {
            if (!isNullOrUndefined(store.id)) {
                this.authGuard.setStore(store.id);
                this.store = store;
                this.bannerUrl = store.bannerImage[1];
                // find product in store
            }
        });
    }

    createStore() {
        this.router.navigateByUrl('/store/create');
    }

}
