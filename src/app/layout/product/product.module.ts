import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductComponent} from './product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {PageHeaderModule} from './../../shared';
import {ProductService} from './shared/product.service';
import {ProductCreateComponent} from './product-create/product-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProductDetailComponent} from './product-detail/product-detail.component';

@NgModule({
    imports: [CommonModule, ProductRoutingModule, PageHeaderModule,
        FormsModule,
        TranslateModule,
        NgbModule.forRoot(),
        ReactiveFormsModule],
    declarations: [ProductComponent, ProductListComponent, ProductCreateComponent, ProductDetailComponent],
    providers: [ProductService]
})

export class ProductModule {
}
