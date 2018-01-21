import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PageHeaderModule } from './../../shared';
import { ProductService } from './shared/product.service';

@NgModule({
    imports: [CommonModule, ProductRoutingModule, PageHeaderModule],
    declarations: [ProductComponent, ProductListComponent],
    providers: [ProductService]
})
export class ProductModule {}
