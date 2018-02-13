import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageHeaderModule} from './../../shared';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StoreService} from './shared/store.service';
import {StoreComponent} from './store.component';
import {StoreDetailComponent} from './store-detail/store-detail.component';
import {StoreCreateComponent} from './store-create/store-create.component';
import {StoreRoutingModule} from './store-routing.module';
import {ProductService} from '../product/shared/product.service';

@NgModule({
    imports: [CommonModule, StoreRoutingModule, PageHeaderModule,
        FormsModule,
        TranslateModule,
        NgbModule.forRoot(),
        ReactiveFormsModule],
    declarations: [StoreComponent, StoreDetailComponent, StoreCreateComponent],
    providers: [ProductService, StoreService]
})

export class StoreModule {
}
